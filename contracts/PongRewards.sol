pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PongRewards is ERC20, Ownable {
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

	event GameCompleted(string gameId, address winner, uint256 reward);
	event TournamentCreated(uint256 tournamentId, uint256 prizePool);
	event TournamentJoined(uint256 tournamentId, address participant);

	// constructor (initialize the token (supply 1000000 tokens))
	constructor() ERC20("PoinCoin", "PONG") {
		_mint(owner(), 1000000 * 10**18);
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
}
