const person = {
  firstname: "John",
  lastName: "Doe",
  email: "adib@gmail.com",
  fullname: function () {
    // return this.firstname + '' + this.lastName;
    return `${this.firstname} ${this.lastName}`;
  },
};
console.log(person.fullname());
