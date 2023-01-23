const inquirer = require("inquirer");
const fs = require("fs");

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
      type: "input",
      message: "write a table of contents",
      name: "table of contents",
    },
    {
      type: "input",
      message: "write installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "write a usage message",
      name: "usage",
    },
    {
      type: "input",
      message: "write a license message",
      name: "license",
    },
    {
      type: "input",
      message: "list the names of contributors",
      name: "contributing",
    },
    {
      type: "input",
      message: "list the names of contributors",
      name: "tests",
    },
    {
      type: "input",
      message: "questions",
      name: "questions",
    },
  ])
  .then((response) => {
    const {
      title,
      description,
      tableOfContents,
      installation,
      usage,
      license,
      contributing,
      tests,
      questions,
    } = response;
    const readMe = ``;
  });
