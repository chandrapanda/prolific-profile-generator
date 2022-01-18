const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
      super(id, name, email);
      this.school = school;
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

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Employee';
    }
};