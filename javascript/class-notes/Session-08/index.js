console.log('» index.js is running');

const person = {
  firstName: 'John',
  age: 30,
  location: {
    city: 'New York',
    temp: 92,
  },
  2021: 'Clarusway',
};

console.log(person.firstName);
console.log(person['age']);
console.log(person);
console.log(person.lastName);

person.lastName = 'Smith';
console.log(person['midName']);

console.log(person);
console.log(person['2021']);

const field = 'Name';
console.log(person['first' + field]);
