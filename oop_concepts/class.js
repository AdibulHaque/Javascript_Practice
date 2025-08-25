// class
class Person {
  firstName = "Adib";
  lastName = "Doe";
  email = "john.doe@example.com";
  age = 30;
  getName() {
    return this.firstName + " " + this.lastName;
  }
}
//After this the person class is usable
let PersonObj = new Person();
console.log(PersonObj.getName());
