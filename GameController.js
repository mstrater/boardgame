import Board from "./Board.js";

export default class GameController {
	constructor() {
		window.game = this;
		this.board = new Board(10, 10, 4);
		this.gameLoop();
	}

	render() {
	}

	gameLoop() {
		this.render();
	}
}
