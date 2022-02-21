//on top of employees:
// officeNumber
// getRole()—overridden to return 'Manager'

const Manager = require('../lib/Manager')

describe('check Manager methods', () => {
    describe('check getOfficeNumber',()=> {
        it('confirms getOfficeNumber', ()=> {
            const manager = new Manager("John", 35, "john@mail.com", "1234567890");
            expect(manager.getOfficeNumber()).toEqual("1234567890")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const manager = new Manager("john", 35, "john@mail.com", "1234567890");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});