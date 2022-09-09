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
const Employee = require("./lib/Employee");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./src/page-template.js");

//use inquirer to porompt the above infomation
const teamMembers = [];
//

var createTeam = function () {
  console.log("Start to build team members!");
  var promptManager = function () {
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "input",
          name: "name",
          message: "What is your name as a Manager? (Required)",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter your name!";
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
            return "Enter your ID!";
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
            return "Enter your email!";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your office number? (Required)",
          validate: (answer) => {
            if (answer !== "") {
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
        promptTeamMembers();
      });
  };

  var promptTeamMembers = function () {
    inquirer
      .prompt([
        {
          type: "list",
          name: "options",
          message: "What would you like to add next? (Required)",
          choices: ["Engineer", "Intern", "EndBuildingTeam"],
        },
      ])
      .then((answer) => {
        if (answer.options == "Engineer") {
          promptEngineer();
        } else if (answer.options == "Intern") {
          promptIntern();
        } else {
          generateHTML();
        }
      });
  };

  var promptEngineer = function () {
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "input",
          name: "name",
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
          name: "id",
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
          name: "email",
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
          name: "github",
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
          answers.github
        );
        teamMembers.push(engineer);
        promptTeamMembers();
      });
  };

  var promptIntern = function () {
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "input",
          name: "name",
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
          name: "id",
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
          name: "email",
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
          name: "school",
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
          answers.school
        );
        teamMembers.push(intern);
        promptTeamMembers();
      });
  };
  // var promptBuildTeam = function () {
  //   inquirer
  //     .prompt([
  //       /* Pass your questions in here */
  //       {
  //         type: "input",
  //         name: "teamName",
  //         message: "What is your team name? (Required)",
  //         validate: (answer) => {
  //           if (answer !== "") {
  //             return true;
  //           }
  //           return "Enter your team name!";
  //         },
  //       },
  //       {
  //         type: "input",
  //         name: "teamId",
  //         message: "What is your team ID? (Required)",
  //         validate: (answer) => {
  //           if (answer !== "") {
  //             return true;
  //           }
  //           return "Enter your team ID!";
  //         },
  //       },
  //       {
  //         type: "input",
  //         name: "teamEmail",
  //         message: "What is your team email? (Required)",
  //         validate: (answer) => {
  //           if (answer !== "") {
  //             return true;
  //           }
  //           return "Enter your team email!";
  //         },
  //       },
  //     ])
  //     .then((answers) => {
  //       // Use user feedback for... whatever!!
  //       const buildTeam = new BuildTeam(
  //         answers.name,
  //         answers.id,
  //         answers.email
  //       );
  //       teamMembers.push(buildTeam);
  //     })
  //     .catch((error) => {
  //       if (error.isTtyError) {
  //         // Prompt couldn't be rendered in the current environment
  //       } else {
  //         // Something else went wrong
  //       }
  //     });

  function generateHTML() {
    // Create dist directory for index.html if it doesnt exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    console.log("Success!");
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
  promptManager();
};
createTeam();
