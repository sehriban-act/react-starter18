console.log('» index.js is running');

/* const person = {
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
console.log(person['first' + field]); */

// methods

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  citiesLived: ['New York', 'Paris', 'London'],
  location: {
    city: 'New York',
    temp: 92,
  },
  2021: 'Clarusway',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullName2() {
    return `${this.firstName} ${this.lastName}`;
  },
  aMethod: () => {
    return 'Hello';
  },
  printCitiesLived() {
    this.citiesLived.forEach(city => {
      console.log(this.firstName + ' has lived in ' + city);
    });
  },
};
// console.log(person.getFullName2());
/* 
const print2 = person.printCitiesLived;
// print();
person.printCitiesLived();
// console.log(this);
// print2();

function printThis() {
  console.log(this);
}
printThis(); */

// function Student() {
//   this.name = 'John';
//   this.grade = 68;
//   this.printGrade = function () {
//     return `${this.name} has a grade of ${this.grade}`;
//   };
//   this.printArrow = () => {
//     return `${this.name} has a grade of ${this.grade}`;
//   };
// }
// console.log(Student());

// const student1 = new Student();
// const student2 = new Student();
// student2.name = 'Jane';

// // console.log(student1.printGrade());
// const pr = student1.printGrade;
// console.log(pr.bind(student2)());

// const arr = [1, 2, 3, 4, 5];
// arr.push(8);
// console.log(arr);

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function () {
    console.log('nom nom nom');
  };
}

function Cat(name, age) {
  Animal.call(this, name, age);
  this.color = 'black';
  function speak() {
    console.log('meow');
  }
}

function Dog(name, age) {
  Animal.call(this, name, age);
  function speak() {
    console.log('woof');
  }
}

const cat1 = new Cat('Fluffy', 2);
console.log(cat1);
const karabas = new Dog('Karabaş', 3);
karabas.prototype = Object.create(Animal.prototype);
console.log(karabas);
