const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site')

//Constructor of team

class Team {
    constructor() {
        this.manager;
        this.engineer;
        this.intern;
        this.employees = [];
    };

// Initialize inquirer

    initializeTeam() {
        inquirer
            .prompt([
                {
                    type: 'Input',
                    name: 'name',
                    message: 'What is the name (Manager)? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter the name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'id',
                    message: 'What is the employee ID? (Required)',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter the employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'email',
                    message: 'What is the email address? (Required)',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter the email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'officeNumber',
                    message: 'What is the office number? (Required)',
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            console.log('Please enter the office number!');
                            return false;
                        }
                    }
                }
            ])

            // Push manager object into
            .then((managerData) => {
                this.manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                let emplName = this.manager.getName().name;
                let emplId = this.manager.getId().id;
                let emplEmail = this.manager.getEmail().email;
                let emplRole = this.manager.getRole().role;
                let emplOfficeNum = this.manager.getOfficeNumber().officeNumber;

                let employee = {
                    name: emplName,
                    id: emplId,
                    email: emplEmail,
                    role: emplRole,
                    officeNumber: emplOfficeNum
                }

                this.employees.push(employee);
                this.addEmployee();
            })
    }

    //inquirer for rest of employees

    async addEmployee() {
        const options = await inquirer
            .prompt({
                type: 'list',
                message: 'Would you like to add another employee?',
                name: 'options',
                choices: ['Engineer', 'Intern', 'No more employees']
            })

        if (Object.values(options)[0] === 'Engineer') {
            await this.engineer();
        } else if (Object.values(options)[0] === 'Intern') {
            await this.intern();
        } else {

//pass information to generate page funtion.

            const staffData = this.employees
            console.log(staffData);
            const pageHtml = generatePage(staffData)
            writeFile(pageHtml)
            copyFile();
            console.log("the HTML webpage has been generated. Check the 'dist' folder.")
        }
    }

// engineer inquirer

    async engineer() {
        const engineerData = await inquirer
            .prompt([
                {
                    type: 'Input',
                    name: 'name',
                    message: "What is the engineer's name? (Required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'id',
                    message: "What is the employee ID? (Required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'email',
                    message: "What is the engineer's email address? (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'github',
                    message: "What is  engineer's GitHub Username? (Required)",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter GitHub username!');
                            return false;
                        }
                    }
                }
            ])

        // // Push engineer object into

        this.engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

        let emplName = this.engineer.getName().name;
        let emplId = this.engineer.getId().id;
        let emplEmail = this.engineer.getEmail().email;
        let emplRole = this.engineer.getRole().role;
        let emplGithub = this.engineer.getGithub().github;

        let employee = {
            name: emplName,
            id: emplId,
            email: emplEmail,
            role: emplRole,
            github: emplGithub
        }

        this.employees.push(employee);

        // return user back to add employee 

        return this.addEmployee();

    }

    // intern inquirer

    async intern() {
        const internData = await inquirer
            .prompt([
                {
                    type: 'Input',
                    name: 'name',
                    message: "What is the intern's name? (Required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'id',
                    message: "What is the intern's employee ID? (Required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'email',
                    message: "What is the intern's email address? (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'Input',
                    name: 'school',
                    message: "What college does/did the intern attend? (Required)",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter the name of college!');
                            return false;
                        }
                    }
                }
            ])
        // pushes info in to employees array
        this.intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        let emplName = this.intern.getName().name;
        let emplId = this.intern.getId().id;
        let emplEmail = this.intern.getEmail().email;
        let emplRole = this.intern.getRole().role;
        let emplSchool = this.intern.getSchool().school;

        let employee = {
            name: emplName,
            id: emplId,
            email: emplEmail,
            role: emplRole,
            school: emplSchool
        }

        this.employees.push(employee);
        // return to add employee 
        return this.addEmployee();

    }
}

module.exports = Team;