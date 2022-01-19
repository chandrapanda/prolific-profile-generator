const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
      super(id, name, email, 'Engineer');
      this.github = github;
    }

    getGithub() {
        this.github;
    }
};

module.exports = Engineer;