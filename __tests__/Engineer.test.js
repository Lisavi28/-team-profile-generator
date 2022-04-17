const Engineer = require('../lib/Engineer')

test('Create a github as part of an object', () => {
    const engineer = new Engineer('Lisa', 1, 'lisa@yahoo.com', 'lisa28');

    expect(engineer.github).toBe('lisa28');
    expect(engineer.role).toBe('Engineer');
})

test('gets engineers github from the object', () => {
    const engineer = new Engineer('Lisa, 1, lisa@yahoo.com', 'lisa28');

    expect(engineer.getGithub()).toHaveProperty('github');
})

test('gets engineers role as an object', () => {
    const engineer = new Engineer('Lisa, 1, lisa@yahoo.com');

    expect(engineer.getRole()).toHaveProperty('role');
})