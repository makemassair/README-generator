const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer"); 
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose the approriate license for this project',
        choices: [
            'Apache',
            'GNU',
            'MIT',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Boost',
            'Creative Commons',
            'Eclipse',
            'Mozilla',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who, if any, are the contributors to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is a test included?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What do you do if there an issue?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
 