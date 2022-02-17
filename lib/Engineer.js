//  this is importing Employee info
const Employee = require ("./Employee");

//  Engineer constractor extends Employee constractor
class Engineer extends Employee {
    constructor (name, id, email, github) {

        // gettting employee constractor
        super (name, id, email);
         this.github = github;
    }
    getGithub() {
        return this.github;
    }   
    // override employee role to Engineer
    getRole () {
        return "Engineer";
    }
};

// exported
module.exports = Engineer;