class Employee {
    constructor(id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;

    }

    printInfo() {
        console.log(`${this.name}'s ID number is ${this.id}'`);
        console.log(`The employee's email is ${this.email}`);
        }
        
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return this.role;
    }


  };



  module.exports = Employee;
  