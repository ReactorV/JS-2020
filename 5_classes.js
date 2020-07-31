class Person {
    field = 'unknown name';
    #year = 1989;//private

    constructor(name) {
        this.name = name;
    }

    get age() {
        return new Date().getFullYear() - this.#year;
    }

    yearsOld(years) {
        this.#year = years;
    }

}

const person = new Person('Vadim');

person.field;
//'unknown name'

person.age;
//31

person.yearsOld(20);
console.log(person.age);
//2000
