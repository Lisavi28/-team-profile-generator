const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Lisa', 1, 'lisa@yahoo.com', 3);

    expect(manager.officeNumber).toBe(3);
    expect(manager.role).toBe('Manager')
})

test('gets managers office number as an object', () => {
    const manager = new Manager('Lisa', 1, 'lisa@yahoo.com', 3);

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
})

test('gets managers role as an object', () => {
    const manager = new Manager('Lisa', 1, 'lisa@yahoo.com');

    expect(manager.getRole()).toHaveProperty('role');
})