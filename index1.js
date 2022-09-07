// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

// Constructors
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template.js");

// Create empty arrays for team and id
const teamArr = [];
const idArr = [];

// Start App
function initApp() {
  // Prompt user to create a manager
  function addManager() {
    console.log("Start building your team profile");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name? (Required)",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your name.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID? (Required)",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your ID.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your email? (Required)",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Email address can't be empty.";
          },
        },
      ])
      .then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email);
        teamArr.push(manager);
        idArr.push(answer.id);
        addTeam();
      });
  }

  // addTeam function after addManager
  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "member",
          message: "Would you like to add next?",
          choices: ["Engineer", "Intern", "End application"],
        },
      ])
      .then((user) => {
        switch (user.member) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }

  // add Engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name? (Required)",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "EName can NOT be left empty.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your ID.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What your email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Email address can NOT be empty.";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your GitHub username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the engineer's GitHub username.";
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );
        teamArr.push(engineer);
        idArr.push(answer.id);
        addTeam();
      });
  }

  // Add Intern
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your name";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your id?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your ID.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Email address can NOT be empty.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email);
        teamArr.push(intern);
        idArr.push(answers.id);
        addTeam();
      });
  }

  function generateHTML() {
    // Create dist directory for index.html
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    console.log("Success!");
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
  }

  addManager();
}

initApp();
