const Employee = require('../lib/Employee.js');

test("gets employees name as an  object", () => {
  const employee = new Employee('Lisa', '1', 'lisa@yahoo.com');

  expect(employee.getName()).toHaveProperty('name');
});

test("gets employees id as an object", () => {
  const employee = new Employee('Lisa', '1', 'lisa@yahoo.com');

  expect(employee.getId()).toHaveProperty('id');
});

test("gets employees email as an  object", () => {
  const employee = new Employee('Lisa', '1', 'lisa@yahoo.com');

  expect(employee.getEmail()).toHaveProperty('email');
});
test("gets employees role as an object", () => {
  const employee = new Employee('Lisa', '1', 'lisa@yahoo.com');
 

  expect(employee.getRole()).toHaveProperty('role');
});

