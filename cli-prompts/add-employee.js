const { Employee } = require('../models/employee');
const Action = require('./action');

class AddEmployee extends Action {

    constructor() {
        super();

        this.prompt = [
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'firstName'
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'lastName'
            },
            {
                type: 'list',
                // choices: [] generated on the fly,
                loop: true,
                name: 'employeeRole'
            },
            {
                type: 'list',
                // choices: [] generated on the fly, + option for "None"
                loop: true,
                name: 'employeeManager'
            }
        ];
    }

    async run() {
        const employees = await Employee.findAll();
        console.log('All Employees:', JSON.stringify(employees, null, 2));

    }
}

module.exports = AddEmployee;