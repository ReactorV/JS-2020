console.log("Hello, I'am module.js!");

const privateKey = 'privateKey';

export const SECRET_KEY = 42;

export default class Person {
    constructor(name) {
        this.name = name;
    }
}
