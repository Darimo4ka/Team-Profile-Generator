const Intern = require("../lib/Intern");

// create a helper function to put data into html content
function generateHTML(teamArr){
    console.log(teamArr);
    // create managerHTML
    function generateManager(manager){
        return `
        <div>
            <h2> ${manager.getName}</h2>
            <h3>${manager.getRole}</h3>
            <ul class="list-group">
            <li class="list-group-item">ID: ${ manager.getId}</li>
            <li class="list-group-item">Email:${ manager.getEmail}</li>
            <li class="list-group-item">Office number: ${officeNumber}</li>
        </ul>
        </div>

  
        `
    } 
    // create engineersHTML

    function generateEngineer(engineer){
        return`
        <div>
        <h2> ${engineer.getName}</h2>
        <h3>${engineer.getRole}</h3>
        <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId}</li>
        <li class="list-group-item">Email:${ engineer.getEmail}</li>
        <li class="list-group-item">Office number: ${engineerGithub}</li>
    </ul>
    </div>
        `
    }
    // create internHTML
    function generateIntern(intern)
        return `
        <div>
        <h2> ${intern.getName}</h2>
        <h3>${intern.getRole}</h3>
        <ul class="list-group">AQ   
        <li class="list-group-item">ID: ${intern.getId}</li>
        <li class="list-group-item">Email:${intern.getEmail}</li>
        <li class="list-group-item">Office number: ${internSchool}</li>
    </ul>
    </div>
`

    // create empty array for html 
    // for(var i = 0, )

    // use filter method employee roles and get correct methods  
    
    // push employes to empty html array

  }

//   export call back function to create whole page 
module.exports = teamArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      <div>${generateHTML(teamArr)}</div>  
    </body>
    </html>
    `
}