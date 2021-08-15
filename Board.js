import Turtle from "./Turtle.js";

export default class Board {
	constructor(width = 10, height = 10, numTurtles = 2) {
		this.width = width;
		this.height = height;
		this.turtles = [];
		// Can only have 2, 3, or 4 Turtles (Players)
		if (numTurtles === 3 || numTurtles === 4) {
			let counter = 0;
			for (let y = 0; y < 2; y++) {
				for (let x = 0; x < 2; x++) {
					this.turtles.push(new Turtle(counter, x * this.width, y * this.height, Turtle.directions.rotateClockwise(Turtle.directions.N, counter)));
					counter++;
					if (numTurtles === 3 && counter >= 2) {
						break;
					}
				}
			}
		} else {
			// Default to 2 players
			this.turtles.push(new Turtle(0, 0, 0, Turtle.directions.N));
			this.turtles.push(new Turtle(1, this.width, this.height, Turtle.directions.S));
		}
	}
}
