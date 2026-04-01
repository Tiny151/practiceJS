const isPlainObject = (val) =>
    !!val && typeof val === "object" && !Array.isArray(val);

const person = { name: "John" };
const ages = [20, 30];
const salary = null;

console.log(isPlainObject(person)); // true
console.log(isPlainObject(ages)); // false
console.log(isPlainObject(salary)); // false
console.log(isPlainObject("Hello")); // false
