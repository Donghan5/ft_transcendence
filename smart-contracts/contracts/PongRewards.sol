// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

// Giving reward to players in Pong game tournaments
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// declare the contract and heritage
contract PongRewards is ERC20, Ownable, ReentrancyGuard {
	struct Tournament {
		uint256 id;
		uint256 prizePool;
		uint256 entryFee;
		uint256 maxParticipants;
		uint256 currentParticipants;
		bool isActive;
		address[] participants;
		mapping(address => bool) hasParticipated;
	}

	struct GameResult {
		string gameId;
		address winner;
		address loser;
		uint256 timestamp;
		uint256 reward;
	}

	mapping(uint256 => Tournament) public tournaments;
	mapping(string => GameResult) public gameResults;
	mapping(address => uint256) public playerStats;

	uint256 public tournamentCounter;
	uint256 public constant WIN_REWARD = 10 * 10 ** 18;  // 10 tokens
	uint256 public constant TOURNAMENT_WIN_MULTIPLIER = 5;
	uint256 public exchangeRate;

	event GameCompleted(string gameId, address winner, uint256 reward);
	event TournamentCreated(uint256 tournamentId, uint256 prizePool);
	event TournamentJoined(uint256 tournamentId, address participant);

	// constructor (initialize the token (supply 1000000 tokens))
	// msg.sender --> the address of call (this contract request)
	constructor() ERC20("PoinCoin", "PONG") Ownable(msg.sender) {
		_mint(owner(), 1000000 * 10**18);
	}

	function setExchangeRate(uint256 _rate) external onlyOwner {
		exchangeRate = _rate; // set the exchange rate for tokens
	}

	function recordGameResult(
        string memory gameId,
        address winner,
        address loser
    ) external onlyOwner {
        require(bytes(gameResults[gameId].gameId).length == 0, "Game already recorded");

        uint256 reward = WIN_REWARD;

        gameResults[gameId] = GameResult({
            gameId: gameId,
            winner: winner,
            loser: loser,
            timestamp: block.timestamp,
            reward: reward
        });

        _mint(winner, reward); // mint tokens to winner
        playerStats[winner]++;  // increment player stats

        emit GameCompleted(gameId, winner, reward);
    }

	function createTournament(uint256 prizePool, uint256 entryFee, uint256 maxParticipants) external onlyOwner returns (uint256) {
        tournamentCounter++;

        Tournament storage tournament = tournaments[tournamentCounter];
        tournament.id = tournamentCounter;
        tournament.prizePool = prizePool;
        tournament.entryFee = entryFee;
        tournament.maxParticipants = maxParticipants;
        tournament.currentParticipants = 0;
        tournament.isActive = true;

        emit TournamentCreated(tournamentCounter, prizePool);
        return tournamentCounter;
    }

    function joinTournament(uint256 tournamentId) external payable {
        Tournament storage tournament = tournaments[tournamentId];

        require(tournament.isActive, "Tournament is not active");
        require(tournament.currentParticipants < tournament.maxParticipants, "Tournament is full");
        require(!tournament.hasParticipated[msg.sender], "Already participated");
        require(msg.value >= tournament.entryFee, "Insufficient entry fee");

        tournament.participants.push(msg.sender);
        tournament.hasParticipated[msg.sender] = true;
        tournament.currentParticipants++;
		tournament.prizePool += msg.value; // add entry fee to the prize pool

        emit TournamentJoined(tournamentId, msg.sender);
    }

    function getTournamentInfo(uint256 tournamentId) external view returns (
        uint256 prizePool,
        uint256 entryFee,
        uint256 maxParticipants,
        uint256 currentParticipants,
        bool isActive
    ) {
        Tournament storage tournament = tournaments[tournamentId];
        return (tournament.prizePool, tournament.entryFee, tournament.maxParticipants, tournament.currentParticipants, tournament.isActive);
    }

    function getPlayerRewards(address player) external view returns (uint256) {
        return balanceOf(player);
    }

	function dividePrizePool(uint256 tournamentId) external onlyOwner {
		Tournament storage t = tournaments[tournamentId];
		require(t.isActive, "t is not active");
		require(t.currentParticipants > 0, "No participants in the tournament");

		uint256 prizePerWinner = t.prizePool / t.currentParticipants;

		for (uint256 i = 0; i < t.participants.length; i++) {
			(bool success, ) = payable(t.participants[i]).call{value: prizePerWinner}(""); // transfer prize to each participant
			require(success, "Failed to transfer prize to winner");
		}

		t.isActive = false; // mark the tournament as inactive
	}

	function withdraw(uint256 amount) external nonReentrant {  // 1e18 PONG = 0.01 ether
		// to not connect direct between burn and ether
		require(balanceOf(msg.sender) >= amount, "Insufficient token balance");
		uint256 etherAmount = (amount * exchangeRate) / 1e18;
		require(address(this).balance >= etherAmount, "Insufficient ETH pool");

		_burn(msg.sender, amount); // burn the tokens from the sender
		(bool success, ) = msg.sender.call{value: etherAmount}(""); // transfer the ether to the sender
		require(success, "ETH transfer failed");
	}

	function setWinner(string memory gameId, address winner) external onlyOwner nonReentrant {
		require(bytes(gameResults[gameId].gameId).length > 0, "Game not found");
		require(gameResults[gameId].winner == address(0), "Winner already set");

		gameResults[gameId].winner = winner;

		uint256 reward = gameResults[gameId].reward;
		_mint(winner, reward); // mint tokens to the winner
		playerStats[winner]++;  // increment player stats

		emit GameCompleted(gameId, winner, reward);
	}
}
