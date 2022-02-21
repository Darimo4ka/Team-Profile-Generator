// on top of employee:
// github—GitHub username
// getGithubName()
// getRole()—overridden to return 'Engineer'

const Engineer = require('../lib/Engineer')

describe('check Engineer methods', () => {
    describe('check engineerGithub',()=> {
        it('confirms Engineer Github username', ()=> {
            const engineer = new Engineer("John", 35, "john@mail.com", "Diana01");
            expect(engineer.getGithub()).toEqual("Diana01")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const engineer = new Engineer("John", 35, "john@mail.com", "Diana01");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});