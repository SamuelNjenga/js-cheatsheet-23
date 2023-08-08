// Let Scope
let a = 3;
if (true) {
  let a = 5;
  console.log(a);
}
console.log(a);

// Const
// Can be assigned only once
const b = 55;
b = 55; // throws an error
