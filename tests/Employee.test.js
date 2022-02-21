//Super class Employee will have this properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

const Employee = require("../lib/Employee");

describe('check Employee methods', () => {
    describe('check getName', () => {
        it('confirms name input', () => {
            const e = new Employee("John", 35, "john@mail.com");
            expect(e.getName()).toEqual("John");
        });
    });

    describe('check getEmail', () => {
        it('confirms email input', () => {
            const e = new Employee("John", 35, "john@mail.com");
            expect(e.getEmail()).toEqual("john@mail.com");
        });
    });

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const e = new Employee("John", 35, "john@mail.com");
            expect(e.getRole()).toEqual("Employee");
        });
    });
});