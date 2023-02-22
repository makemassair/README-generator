// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log(answers.licenseBadge);
  return `
# ${answers.title}

${answers.licenseBadge}

A deployed version of this project [can be viewed here.](${answers.URL})

## Description
${answers.description}

## Contents
- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Contact Information](#contact%20information)

## About
${answers.about}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
License used for this project - ${answers.license}
* For more information on license types, please refer to the following website: [choosealicense.com](https://choosealicense.com/).

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions

If you've any questions about this project, please contact ${answers.author}.

### Contact Information

GitHub username: [${answers.userName}](https://github.com/${answers.userName})<br>
GitHub email: <${answers.userEmail}>

`;
};

module.exports = generateMarkdown;
