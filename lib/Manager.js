//  this is importing Employee info
const Employee = require ("./Employee");

//  Manager constractor extends Employee constractor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        // gettting employee constractor
        super (name, id, email);
         this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // override employee role to manager
    getRole () {
        return "Manager";
    }
};

// exported
module.exports = "Manager";