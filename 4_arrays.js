const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]];

nested.flat();
//[ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]

//depth is working with recursion
nested.flat(2);
//[ 'a', 'b', 'c', 'd', 'e', 'f', 'g']

const technologies = ['react redux', 'angular', 'vue', 'node and deno'];

technologies.map(tech => tech.split(' ').flat());
//Alternative
technologies.flatMap(tech => tech.split(' '));
//[
//   'react',   'redux',
//   'angular', 'vue',
//   'node',    'and',
//   'deno'
// ]
