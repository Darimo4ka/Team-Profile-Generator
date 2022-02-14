//  to import employee info
const Employee = require ("./Employee");

//  Intern constractor extends Employee constractor
class Intern extends Employee {
    constructor (name, id, email,school) {

        // gettting employee constractor
        super (name, id, email);
         this.school = school;
    }
    getSchool() {
        return this.school;
    }
     // override employee role to manager
     getRole () {
        return "Intern";
     } 
 };    
        // to export
   module.exports = "Intern";     