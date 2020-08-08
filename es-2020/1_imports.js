async function foo() {
    const module = await import('./module.js');
    console.log(module); // Module {Symbol(Symbol.toStringTag): "Module"}
    console.log(module.SECRET_KEY); //428ii

    const Person = module.default;

    const person = new Person('Vadzim');
    console.log(person); // Person {name: 'Vadzim'}
}

foo();
