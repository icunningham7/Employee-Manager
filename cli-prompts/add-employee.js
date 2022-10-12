const inquirer = require('inquirer');
const Action = require('./action');
const Role = require('../models/role');
const Employee = require('../models/employee');


class AddEmployee extends Action {

    async getPrompt() {
        const employees = await Employee.getAllEmployees();
        let managerChoices = await employees.map((employee) => {
            return {
                name: employee.getName(),
                value: employee.id
            }
        });
        managerChoices.unshift({
            name: 'None',
            value: null
        });

        const roles = await Role.getAllRoles();
        let roleChoices = roles.map((role) => {
            return {
                name: role.title,
                value: role.id
            }
        });


        let prompt = [
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
                message: "What is the employee's role?",
                choices: roleChoices,
                loop: true,
                name: 'employeeRole'
            },
            {
                type: 'list',
                message: "Who is the employee's manager?",
                choices: managerChoices,
                loop: true,
                name: 'employeeManager'
            }
        ];

        return prompt;
    }

    async run() {
        const prompt = await this.getPrompt();
        const answers = await inquirer.prompt(prompt);
        let newEmployee = new Employee();
        newEmployee.first_name = answers.firstName;
        newEmployee.last_name = answers.lastName;
        newEmployee.role_id = answers.employeeRole;
        newEmployee.manager_id = answers.employeeManager;

        await newEmployee.createEmployeeRecord();
        return
    }
}

module.exports = AddEmployee;