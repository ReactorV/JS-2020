const animal = {
    type: 'bird',
    age: '1'
};

Object.getOwnPropertyDescriptor(animal, 'type');
//{ value: 'bird', writable: true, enumerable: true, configurable: true }

Object.getOwnPropertyDescriptors(animal);
//{
//   type: {
//     value: 'bird',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: '1', writable: true, enumerable: true, configurable: true }
// }

Object.entries(animal);
//[ [ 'type', 'bird' ], [ 'age', '1' ] ]

Object.fromEntries([ [ 'type', 'bird' ], [ 'age', '1' ] ]);
//{ type: 'bird', age: '1' }

Object.entries(['B', 'I', 'R', 'D']);
//[ [ '0', 'B' ], [ '1', 'I' ], [ '2', 'R' ], [ '3', 'D' ] ]

for ([key, value] of Object.entries(animal)) {
    console.log(key, value);
}

Object.values(animal);
//[ 'bird', '1' ]
Object.keys(animal);
//[ 'type', 'age' ]


