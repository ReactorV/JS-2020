const values = {
    undefined: undefined,
    false: false,
    null: null,
    zero: 0,
    empty: ''
};

console.log(values.undefined || 'default value');//default value
console.log(values.undefined ?? 'default value');//default value

console.log(values.null || 'default value');//default value
console.log(values.null ?? 'default value');//default value

console.log(values.false || 'default value');//default value
console.log(values.false ?? 'default value');//false

console.log(values.zero || 'default value');//default value
console.log(values.zero ?? 'default value');//0

console.log(values.empty || 'default value');//default value
console.log(values.empty ?? 'default value');//''
