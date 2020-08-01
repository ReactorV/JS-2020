class Person {
    static type = 'HUMAN';
    static #area = 'EARTH';//static private
    field = 'unknown name';
    #year = 1989;//private

    constructor(name) {
        this.name = name;
    }

    get age() {
        return new Date().getFullYear() - this.#year;
    }

    setAge(years) {
        this.#year = new Date().getFullYear() - years;
    }

    static getArea() {
        return Person.#area === 'EARTH' ? 'EARTH' : 'MARS';
    }
}

const person = new Person('Vadim');

person.field;
//'unknown name'

person.age;
//31

person.setAge(25);
console.log(person.age);
//25

console.log(Person.type);
//HUMAN

console.log(Person.getArea());
//EARTH
