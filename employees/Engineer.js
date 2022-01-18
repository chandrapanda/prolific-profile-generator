const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
      super(id, name, email);
      this.github = github;
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

    getGithub() {
        this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
};