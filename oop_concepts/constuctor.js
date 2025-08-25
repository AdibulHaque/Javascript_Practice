// class
class Person {
  firstName = "Adib";
  lastName = "Doe";
  email = "john.doe@example.com";
  age = 30;
  getName() {
    return this.firstName + " " + this.lastName;
  }
  // auto execute, can't return
  constructor(a, b) {
    console.log(a + b);
  }
}

let PersonObj = new Person(20, 30);
