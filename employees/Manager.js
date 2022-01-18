const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, office) {
      super(id, name, email);
      this.office = office;
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

    getOffice() {
        return this.office;
    }
    
    getRole() {
        return 'Manager';
    }
    
};