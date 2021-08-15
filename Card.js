export default class Card {
	constructor(name = "", func = () => {}) {
		this.name = name;
		this.func = func;
	}
}
