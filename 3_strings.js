const startSpaces = '         Hello new string ';
const endSpaces = 'features JS 2020            ';

startSpaces.trimStart() + endSpaces.trimEnd();
//Hello new string features JS 2020
(startSpaces + endSpaces).trim();
//Hello new string features JS 2020

console.log('site'.padStart(8, 'www.'));
//www.site
console.log('site'.padEnd(8, '.com'));
//site.com

const animal = {
    type: 'bird',
    wings: true
};

function tag(strings, type, wings) {
    const [str1, str2, str3] = strings;
    const flying = wings ? "can fly" : "can't fly";

    return `${str1}${type}${str2}${flying}${str3}`
}

const output = tag`The animal with type ${animal.type} possibly ${animal.wings} alone`;
console.log(output);
//The animal with type bird possibly can fly alone
