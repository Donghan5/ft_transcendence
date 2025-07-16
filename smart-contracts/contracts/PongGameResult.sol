// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract PongGameResult is AccessControl {
	bytes32 public constant RECORDER_ROLE = keccak256("RECORDER_ROLE");

	struct Result {
		address winner;
		address loser;
		uint8 scoreWinner;
		uint8 scoreLoser;
		uint8 mode; // 0 for pvp, 1 for ai
		uint32 finishedAt;
	}

	mapping(bytes32 => Result) private results;

	event GameRecoreded (
		bytes32 indexed gameId,
		address indexed winner,
		address indexed loser,
		uint8 scoreWinner,
		uint8 scoreLoser,
		uint8 mode,
		uint32 finishedAt
	);

	constructor(address admin) {
		_grantRole(DEFAULT_ADMIN_ROLE, admin);

	}

	function recordGame(
		bytes32 gameId,
		address winner,
		address loser,
		uint8 scoreWinner,
		uint8 scoreLoser,
		uint8 mode,
		uint32 finishedAt
	) external onlyRole(RECODER_ROLE) {
		require(results[gameId].winner == address(0), "Game already recorded");

		results[gameId] = Result({
			winner: winner,
			loser: loser,
			scoreWinner: scoreWinner,
			scoreLoser: scoreLoser,
			mode: mode,
			finishedAt: finishedAt
		});

		emit GameRecoreded(
			gameId,
			winner,
			loser,
			scoreWinner,
			scoreLoser,
			mode,
			finishedAt
		);
	}

	function getResult(bytes32 gameId) external view returns (Result memory) {
		return results[gameId];
	}
}

// DB->chain async
