// Spread operator
const sam = {
  firstName: "Samuel",
  lastName: "Njenga",
};

const b = {
  ...sam,
  lastName: "Johnson",
  canCode: true,
};

console.log(sam);
console.log(b);

/** Great for modifying objects without side effects or affecting the original */

// Destructuring nested objects
const Person = {
  name: "Charlie Jefferson",
  age: 29,
  sex: "male",
  status: "single",
  address: {
    country: "KENYA",
    city: "NAIROBI",
    areaCode: "23456",
  },
};

const {
  address: { city, country },
  name,
} = Person;
console.log(name, country, city);
console.log(city);
console.log(areaCode); // Reference error
