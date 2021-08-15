export default class Turtle {
	constructor(playerNum = 0, x = 0, y = 0, dir = DIRECTIONS.N) {
		this.playerNum = playerNum;
		this.x = x;
		this.y = y;
		this.dir = dir;
	}

	static mod(n, m) {
		return ((n % m) + m) % m;
	}

	static directions = {
		"N": 0,
		"E": 1,
		"S": 2,
		"W": 3,
		"rotateClockwise": (dir, numTurns) => (dir + numTurns) % 4,
		"rotateCounterClockwise": (dir, numTurns) => mod((dir - numTurns), 4)
	}
}
