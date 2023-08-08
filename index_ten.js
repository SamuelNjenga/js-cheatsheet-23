// Object function assignment
const obj = {
  a: 5,
  b() {
    console.log("JAVASCRIPT");
  },
};

obj.b();

// Object.entries()
const project = {
  fullName: "Sporting Web App",
  noOfUsers: 23,
  language: "English",
};

const entries = Object.entries(project);
/** Returns an array of [key, value] pairs of the object passed */
console.log(entries);
