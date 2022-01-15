//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const cardMaker = require('./utilities/generateCards');

//Questions for user input 
const questions = [
    {
        type: 'list',
        message: "Choose a role title for this team member.",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
    {
        type: 'input',
        message: "Please enter the team member's name.",
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
        message: "Please describe your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the teammate's ID number.",
        name: 'id',
        default: '2',
    },
    {
        type: 'input',
        message: "Please provide the office number for this manager.",
        name: 'office',
        default: '3'
    },
    {
        type: 'input',
        message: "Enter the student's school name.",
        name: 'school',
        default: 'Unversity of Washington'
    },
 
    {
        type: 'input',
        message: "What is the teammate's GitHub username? (No @ needed)",
        name: 'github',
        default: 'chandrapanda',
    },
    {
        type: 'input',
        message: "What is the teammate's email address?",
        name: 'email',
        default: 'chandra_holt@hotmail.com',
    }
];


//Function to write HTML file
function makeHTML() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            fs.writeFile('index.html', `# ${responses.title}

## Description
${responses.description}
## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation 
${responses.installation}
## Usage 
${responses.usage}
## Contributing 
${responses.contributing}
## Tests 
${responses.tests}
## Questions
### GitHub
[GitHub](https://www.github.com/${responses.github}) 
### Email
${responses.email}
${myMarkdown}`, function(err) {
    if (err) throw err;
    console.log('README created!');
    
})
})
};

// Function call to initialize app
writeReadMe();

