console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991

console.log(typeof 10n);
//bigint

console.log(9007199254740991n - 9007199254740990n);//only bigInt with bigInt
//1n

console.log(-991n);
//-991n

console.log(10n - 5);
//error

console.log(parseInt(10n) - 5);
//5

console.log(10n - BigInt(5));
//5n

console.log(10n / 3n);//only integer numbers
//3n

//console.log(10.7n);//only integer numbers
//error
