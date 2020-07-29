const emulateDelay = (id, ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(id), ms)
    });
};

const promises = [
    emulateDelay(1, 300),
    emulateDelay(2, 600),
    emulateDelay(3, 1000)
];

//OLD SYNTAX
async function oldSyntax() {
    for (const promise of await Promise.all(promises)) {
        console.log('promiseID:', promise);
    }
}

oldSyntax();

//NEW SYNTAX
async function newSyntax() {
    for await (const promise of promises) {
        console.log('promiseID:', promise);
    }
}

newSyntax();
