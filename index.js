const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// const path = require("path"); maybe ti add employee?


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
    }
    renderTeam();
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
//   //  create function to write index.html file to log output:
// const fileName =  require('./output/index.html');
//   

const htmlPageContent   = ({managerName, managerId, managerEmail,managerOffice})=>
console.log(team)
// console.log(data.managerName)
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${managerName}
</body>
</html>`


  // write the html page
  // use the data passed to the function to  log the data of each member of the team
  // `${}`;
// };

    function renderTeam() {
      // console.log(team)
      const html=htmlPageContent(team)
      
    // fs.writeFile('team.html',html, (err)=>
    //     err? console.log(err) : console.log("success")
    // )
  }
