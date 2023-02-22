// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
${answers.licenseBadge}

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

## Contact Information

GitHub username

`;
}

module.exports = generateMarkdown;
