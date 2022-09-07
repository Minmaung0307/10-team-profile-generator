//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//use inquirer to porompt the above infomation
const teamMembers = [];
//
var pormptManager = function () {
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
    })

    var pormptEngineer = function () {
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
    })

    var pormptIntern = function () {
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
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

pormptManager()
