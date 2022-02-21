//on top of Employee:
//  school
// getSchool()
// getRole()—overridden to return 'Intern'

const Intern = require('../lib/Intern')

describe('check Intern methods', () => {
    describe('check getSchool',()=> {
        it('confirms getShool', ()=> {
            const intern = new Intern("John", 35, "john@mail.com", "Glen Shields Public School");
            expect(intern.getSchool()).toEqual("Glen Shields Public School")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const intern = new Intern("john", 35, "john@mail.com", "Glen Shields Public School");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});