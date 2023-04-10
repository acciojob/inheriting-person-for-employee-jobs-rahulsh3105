function Person(name, age) {
  Alice = name;
  25 = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
