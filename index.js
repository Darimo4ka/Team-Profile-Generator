const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path"); 
//  giving where to create html when function genereateHTML called.

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const html = require("./lib/htmlRenderer");
const team = [];
addToTeam();

function addToTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployee",
      message: "Add an employee, or select 'Finish'.",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finish"
      ]
    }
  ]).then(function (data) {
    const employeeRole = data.addEmployee;
    if (employeeRole === "Manager") {
      managerInfo();
    }
    else if (employeeRole === "Engineer") {
      engineerInfo();
    }
    else if (employeeRole === "Intern") {
      internInfo();
    }
    else if (employeeRole === "Finish") {
      generateHTML();
    }
  });
}

function managerInfo() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Manager's name:"
    },
    {
      type: "input",
      name: "managerId",
      message: "Manager's ID:"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Manager's e-mail:"
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Manager's Office Number:"
    },
  ]).then(function (data) {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    team.push(manager);
    addToTeam();
  });
}

function engineerInfo() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Engineer's Name:"
    },
    {
      type: "input",
      name: "engineerId",
      message: "Engineer's ID:"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Engineer's E-mail:"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Engineer's Github username:"
    }
  ]).then(function (data) {
      const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
      team.push(engineer);
      addToTeam();
    });
}

function internInfo() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Intern's Name:"
    },
    {
      type: "input",
      name: "internId",
      message: "Intern's ID:"
    },
    {
      type: "input",
      name: "internEmail",
      message: "Intern's E-mail:"
    },
    {
      type: "input",
      name: "internSchool",
      message: "Intern's School:"
    }
  ]).then(function (data) {
      const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
      team.push(intern);
      addToTeam();
    });
}
 //  create function to write index.html file to log output: this innerhtml I created.... needed to create path and move html using I guess path
function generateHTML(){
  // const html
  // `<!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  //       <title>Team Profile</title>
  //   </head>
  //   <body>
  //       <nav class="navbar navbar-dark bg-dark mb-5">
  //           <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
  //       </nav>
  //       <div class="container">
  //           <div class="row">`
    fs.writeFile(outputPath, html(team), function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("HTML generated for team!");
}
