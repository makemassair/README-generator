// declaring dependencies + variables 
const inquirer = require("inquirer"); 
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions").questions;
const licenseBadge = require("./utils/badges").licenseBadge;
const { log } = require("console");

// run question function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const generateContent = generateMarkdown(answers);
         answers.licenseBadge = licenseBadge(answers.license);
        fs.writeFile('./output/README.md', generateContent, (err) => {
            if(err) {
                console.log(`Sorry, I could not save the file`);
            } else {
                console.log(`Success! Your README.md has been created and is in the folder named "output"`);
            }
        })
        console.log(generateContent);
        return answers
    })
    .catch((error) => {
        console.log(error);

    })
}

runQuery();

// function createReadme() {


// }

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
 