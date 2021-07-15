// TODO: Include packages needed for this application
const generator = require('./utils/generateMarkdown');
const fs = require('fs');
const inquire = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    // TODO: Project
    {   
        type: '',
        name: '',
        message:'',
    },
    // TODO: Description
    {   
        type: '',
        name: '',
        message:'',
    },
    // TODO: Installation
    {   
        type: '',
        name: '',
        message:'',
    },
    // TODO: Usage
    {   
        type: 'input',
        name: 'usage',
        message:'How do you use this application?',
    },
    // TODO: Contributing
    {   
        type: '',
        name: '',
        message:'',
    },
    // TODO: Tests
    {   
        type: 'input',
        name: 'testDesc',
        message: 'What are the steps to test this application?',
    },
    // TODO: Questions - username
    {   
        type: 'input',
        name: 'username',
        message:'What is your Github username?',
    },
    // TODO: Questions - email
    {   
        type: 'input',
        name: 'email',
        message:'What is the best email for people to contact you?',
    },
    // TODO: License
    {   
        type: 'list',
        name: 'license',
        message:'Select a license for a project',
        choices: ['GPL','AGPL','LGPL','MIT','BSD 2-clause','BSD 3-clause','Apache 2.0','Creative Commons'],
        default: 'MIT',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
