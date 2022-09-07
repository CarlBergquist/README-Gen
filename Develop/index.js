// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['Please enter a title for your README:', 'Please Enter a Description for your README:', 'Enter Installation Instructions:', 'Enter Usage Information:', 'Contribution Guidelines:', 'Test Instructions:', 'Choose your licensing:', 'Enter your GitHub Username:', 'Enter your Email:'];

const badges = ['![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)', '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)', '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)', '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'];



inquirer
    .prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'Title',

        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'Description',

        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'Install',

        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'Usage',

        },
        {
            type: 'input',
            message: `${questions[4]}`,
            name: 'Contribution',

        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'Test',

        },
        {
            type: 'list',
            message: `${questions[6]}`,
            choices: ['Apache', 'Boost', 'BSD', 'Eclipse'],
            name: 'License',

        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'github',

        },
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'email',

        },

    ])
    .then(answers => {
        const badge = () => {
            switch (answers.License) {
                case "Apache":
                    return badges[0];
                case "Boost":
                    return badges[1];
                case "BSD":
                    return badges[2];
                case "Eclipse":
                    return badges[3];
            }
        }
        const readme = `
${badge(answers.License)}
        
# ${answers.Title}

## Description

${answers.Description}

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation

${answers.Install}

## Usage

${answers.Usage}

## License

${answers.License}

## Contributing

${answers.Contribution}

## Tests

${answers.Test}

## Questions

Link to my [GitHub](https://github.com/${answers.github}/)

If you have any further questions please email me at: ${answers.email}

`
        fs.writeFile('README.md', readme, (err) =>
            err ? console.error(err) : console.log('Success!')

        )
    })


