// Object property assignment
const a = 2;
const b = 5;
const obj = { a, b };

//Before
// obj = { a: a, b: b };

console.log(obj);

// Object.asign()
const obj1 = { a: 12 };
const obj2 = { b: 34 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
