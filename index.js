// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template.js");

//use inquirer to porompt the above infomation
const teamMembers = [];
//
var promptEmployee = function promptEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Do you want to add an Employee? (Required)",
        choices: ["Engineer", "Intern", "BuildTeam"],
      },
    ])
    .then((answer) => {
      if (answer.options == "Engineer") {
        promptEngineer();
      }
      if (answer.options == "Intern") {
        promptIntern();
      }
      if (answer.options == "BuildTeam") {
        promptBuildTeam();
      }
    });
};

var promptManager = function () {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "managerName",
        message: "What is your name? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your name!";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your ID? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your ID!";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your email? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your email!";
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your office number? (Required)",
        validate: (answer) => {
          const num = answer.match(/[0-9]/);
          if (num) {
            return true;
          }
          return "Enter your office number!";
        },
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
    });
};
var promptEngineer = function () {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "engineerName",
        message: "What is your name? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your name!";
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your ID? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your ID!";
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your email!";
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your github username? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your github username!";
        },
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
    });
};
var promptIntern = function () {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "internName",
        message: "What is your name? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your name!";
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is your ID? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your ID!";
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your email? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your email!";
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your school? (Required)",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter your school!";
        },
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.internSchool
      );
      teamMembers.push(intern);
    })

    var promptBuildTeam = function () {
      inquirer
        .prompt([
          /* Pass your questions in here */
          {
            type: "input",
            name: "teamName",
            message: "What is your team name? (Required)",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Enter your team name!";
            },
          },
          {
            type: "input",
            name: "teamId",
            message: "What is your team ID? (Required)",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Enter your team ID!";
            },
          },
          {
            type: "input",
            name: "teamEmail",
            message: "What is your team email? (Required)",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Enter your team email!";
            },
          },
        ])
        .then((answers) => {
          // Use user feedback for... whatever!!
          const buildTeam = new BuildTeam(
            answers.name,
            answers.id,
            answers.email,
          );
          teamMembers.push(buildTeam);
        })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

promptManager();
