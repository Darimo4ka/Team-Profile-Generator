//  write code to define employee constractor  for future exporting
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return "Employee";
    }

};
// exported
module.exports = "Employee";
