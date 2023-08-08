// Arrow function
const sum = (a, b, c, d, e) => a + b + c + d + e;

console.log(sum(10, 20, 30, 40, 50));

// Default parameters
function print(a = 5) {
  console.log(a);
}
print();
print(22);
