// declaring dependencies + variables 
const inquirer = require("inquirer"); 
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions").questions;
const { log } = require("console");

// run question function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        return answers
    })
    .catch((error) => {
        console.log(error);

    })
}

runQuery();

// function to write README file
// function writeToFile(fileName, questions) {
//     return inquirer.prompt(data)
//     .then((answers) => {
//         console.log(answers);
//         return answers
//     })
//     .catch((error) => {
//         console.log(error);

//     })
// }


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
 