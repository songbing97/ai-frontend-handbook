class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }
}

// Test
const person = new Person("John Doe", 25);

console.log(person.getName()); // 输出 "John Doe"
console.log(person.getAge()); // 输出 25

person.setName("Jane Smith");
person.setAge(30);

console.log(person.getName()); // 输出 "Jane Smith"
console.log(person.getAge()); // 输出 30
