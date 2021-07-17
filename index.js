// Packages needed to run the application
const generator = require("./utils/generateMarkdown");
const fs = require("fs");
const inquire = require("inquirer");

// Array of question objects for the user
const questions = [
  {
    type: "input",
    name: "projTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "projDescription",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installSteps",
    message: "What are the installation steps?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },
  {
    type: "input",
    name: "contributeText",
    message: "How can users contribute to this project?",
  },
  {
    type: "input",
    name: "testDesc",
    message: "What are the steps to test this application?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the best email for people to contact you?",
  },
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

// Writes the compile markdown text to the readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("File was not created");
    } else {
      console.log("README created succesfully");
    }
  });
}

// Loads question prompts and compiles answers using inquirer, then generates the markdown text and calls writeToFile
function init() {
  inquire.prompt(questions).then((answers) => {
    const outStr = generator(answers);
    writeToFile('README.md',outStr);
  });
}

// Function call to initialize app
init();
