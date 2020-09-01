// function add(a, b) {
//   return a + b;
// }
function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(1)(5)); //returns a function

const add2 = a => b => a + b;

console.log(add2(1)(5));
// Function with a single parameter instead of multiple
