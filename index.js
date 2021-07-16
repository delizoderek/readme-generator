// TODO: Include packages needed for this application
const generator = require("./utils/generateMarkdown");
const fs = require("fs");
const inquire = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  // TODO: Project
  {
    type: "input",
    name: "projTitle",
    message: "What is the title of your project?",
  },
  // TODO: Description
  {
    type: "input",
    name: "projDescription",
    message: "How would you describe your project?",
  },
  // TODO: Installation
  {
    type: "input",
    name: "installSteps",
    message: "What are the installation steps?",
  },
  // TODO: Usage
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },
  // TODO: Contributing
  {
    type: "input",
    name: "contributeText",
    message: "How can users contribute to this project?",
  },
  // TODO: Tests
  {
    type: "input",
    name: "testDesc",
    message: "What are the steps to test this application?",
  },
  // TODO: Questions - username
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  // TODO: Questions - email
  {
    type: "input",
    name: "email",
    message: "What is the best email for people to contact you?",
  },
  // TODO: License
  {
    type: "list",
    name: "license",
    message: "Select a license for a project",
    choices: [
      "GPLv3",
      "GPLv2",
      "AGPL",
      "LGPL",
      "FDL",
      "MIT",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "Apache-2.0",
      "CC0",
    ],
    default: "MIT",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("File was not created");
    } else {
      console.log("README created succesfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquire.prompt(questions).then((answers) => {
    const outStr = generator(answers);
    writeToFile('README.md',outStr);
  });
}

// Function call to initialize app
init();
