export default class Validator {
	constructor(name) {
        this.name = name;
	}

	validateUsername() {
        const re = /^[a-z]*[\d{0-3}\w-_][a-z]*$/i;
        return re.test(this.name);
	}
 }
