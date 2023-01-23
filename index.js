const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description about your project",
      name: "description",
    },
    {
      type: "editor",
      message:
        "write installation instructions (close and save text editor to submit)",
      name: "installation",
    },
    {
      type: "input",
      message: "write a usage message",
      name: "usage",
    },
    {
      type: "list",
      message: "choose a license",
      name: "license",
      choices: [
        "MIT",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicense",
        "BSD 2-clause",
        "LGPLv3",
      ],
    },
    {
      type: "input",
      message: "list the names of contributors",
      name: "contributing",
    },
    {
      type: "editor",
      message: "tests (close and save text editor to submit)",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter github username",
      name: "github",
    },
    {
      type: "input",
      message: "enter your email",
      name: "email",
    },
  ])
  .then((response) => {
    const {
      title,
      description,
      installation,
      usage,
      license,
      contributing,
      tests,
      github,
      email,
    } = response;
    const readMe = `# ${title}  <img src = 'https://img.shields.io/badge/license-${license}-red'/> \n 
    \n## description\n
    \n${description}\n
    \n## Table of contents\n
    \n* [description](#description)\n
    \n* [installation](#installation)\n
    \n* [usage](#usage)\n
    \n* [license](#license)\n
    \n* [contributing](#contributing)\n
    \n* [tests](#tests)\n
    \n* [questions](#questions)\n
    \n## Installation\n
    \n${installation}\n
    \n## usage\n
    \n${usage}\n
    \n## license\n
    \n${license}\n
    \n## contributing\n
    \n${contributing}\n
    \n## tests\n
    \n${tests}\n
    \n## questions\n
    \ngithub profile: https://github.com/${github}\n
    \nemail me: ${email}`;

    createReadMe(readMe);
  });

function createReadMe(readMe) {
  fs.writeFile("README.md", readMe, (err) => {
    console.log(err);
  });
}
