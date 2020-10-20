const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project?",
    },
    {
        type: "input",
        name: "install",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Write how to contribute.",
    },
    {
        type: "input",
        name: "credits",
        message: "List contributers to this project.",
    },
    {
        type: "input",
        name: "test",
        message: "Test Instructions?",
    },
    {
        type: "list",
        name: "license",
        choices: [
            'MIT',
            'GPLv3',
            'Apache2.0',
        ]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, generateMarkdown(data))
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(answers => {
    writeToFile('goodReadme.md', answers)
})
}

// function call to initialize program
init();
