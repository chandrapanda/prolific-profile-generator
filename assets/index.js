//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const cardMaker = require('./employees');

//Questions for user input 
const roleQuestion = [
    {
        type: 'list',
        message: "Choose a role title for this team member.",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the engineer's name.",
        name: 'name',
        default: 'Sam',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the engineer's ID number.",
        name: 'id',
        default: '2',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a number.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("An email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username? (No @ needed)",
        name: 'github',
        default: 'chandrapanda',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  GitHub username is required.");
            }
            return true;
        }
    },

];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter the intern's name.",
        name: 'name',
        default: 'Sam',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the intern's ID number.",
        name: 'id',
        default: '2',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a number.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("An email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter the intern's school name.",
        name: 'school',
        default: 'Unversity of Washington',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  school name is required.");
            }
            return true;
        }
    },

];

const managerQuestions = [
    {
        type: 'input',
        message: "Please enter the manager's name.",
        name: 'name',
        default: 'Sam',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the manager's ID number.",
        name: 'id',
        default: '2',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a number.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide the office number for this manager.",
        name: 'office',
        default: '3',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a number.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("An email address is required.");
            }
            return true;
        }
    }
];

function askManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            console.log(response);
        });
        
};

function askEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            console.log(response);
        });
        
};

function askIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            console.log(response);
        });
        
};

function askRole() {
    inquirer
        .prompt(roleQuestion)
        .then((input) => {
            console.log(input);
            if (input.role == 'Manager') {
                console.log('This is a manager.');
                askManager();
            } else if (input.role == 'Engineer') {
                console.log('This is an engineer.');
                askEngineer();
            } else if (input.role == 'Intern') {
                console.log('This is an intern.');
                askIntern();
            }
        });
};


//Function to write HTML file
// function makeHTML() {
//     inquirer
//         .prompt(questions)
//         .then((responses) => {
//             console.log(responses);
//             fs.writeFile('index.html', `# ${responses.title}

// ## Description
// ${responses.description}
// ## Table of Contents
// 1. [Installation](#installation) 
// 2. [Usage](#usage)
// 3. [Contributing](#contributing)
// 4. [Tests](#tests)
// 5. [Questions](#questions)

// ## Installation 
// ${responses.installation}
// ## Usage 
// ${responses.usage}
// ## Contributing 
// ${responses.contributing}
// ## Tests 
// ${responses.tests}
// ## Questions
// ### GitHub
// [GitHub](https://www.github.com/${responses.github}) 
// ### Email
// ${responses.email}
// ${myMarkdown}`, function(err) {
//     if (err) throw err;
//     console.log('README created!');
    
// })
// })
// };

// Function call to initialize app
askRole();

