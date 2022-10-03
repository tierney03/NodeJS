// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['Apache 2.0', 'MIT', 'ISC', 'Unlicense', 'none']
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Running 
inquirer
  .prompt (questions)
  .then(function(data){
    const queryURL = `https://api.github.com/users/${data.questions}`;


    fs.writeFile("README.md", generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README.md has been created!")

  );

});
