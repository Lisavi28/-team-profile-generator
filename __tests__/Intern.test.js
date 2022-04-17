const Intern = require('../lib/Intern')

    test('creates an intern object', () => {
        const intern = new Intern('Lisa', 1, 'lisa@yahoo.com', 'Vanderbilt');

        expect(intern.school).toBe('Vanderbilt');
        expect(intern.role).toBe('Intern');

})   

    test('gets interns school as an object', () => {
        const intern = new Intern('Lisa', 1, 'lisa@yahoo.com', 'Vanderbilt');
    
        expect(intern.getSchool()).toHaveProperty('school');
})

    test('gets interns role as an object', () => {
        const intern = new Intern('Lisa', 1, 'lisa@yahoo.com');

        expect(intern.getRole()).toHaveProperty('role');
})