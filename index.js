//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const Manager = require("./lib/Manager");

//use inquirer to porompt the above infomation
const teamMembers = [];
//
var pormptManager = function () {
  inquirer
    .prompt([
      /* Pass your questions in here */
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
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};
pormptManager();
