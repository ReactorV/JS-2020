const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('my error');
const promise3 = Promise.resolve(3);

async function testAll() {
    const result = await Promise.all([promise1, promise2, promise3])
        .catch(err => console.log(err));

    console.log(result);
}

testAll();
//my error
//undefined

async function testAllSettled() {
    const result = await Promise.allSettled([promise1, promise2, promise3]);

    console.log(result);
}

testAllSettled();
/*[
    { status: 'fulfilled', value: 1 },
    { status: 'rejected', reason: 'my error' },
    { status: 'fulfilled', value: 3 }
]*/

