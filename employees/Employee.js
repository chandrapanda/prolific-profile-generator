class Employee {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    printInfo() {
      console.log(`${this.name}'s ID number is ${this.id}'`);
      console.log(`The employee's email is ${this.email}`);
    }
  }
  module.exports = Employee;
  