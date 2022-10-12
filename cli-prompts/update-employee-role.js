const inquirer = require('inquirer');
const Action = require('./action');
const Employee = require('../models/employee');
const Role = require('../models/role');

class UpdateEmployeeRole extends Action { 

    async getPrompt() {
        const employees = await Employee.getAllEmployees();
        let employeeChoices = employees.map((employee) => {
            return {
                name: employee.getName(),
                value: employee.id
            }
        });

        const roles = await Role.getAllRoles();
        let roleChoices = roles.map((role) => {
            return {
                name: role.title,
                value: role.id
            }
        });

        const managers = await Employee.getAllEmployees();
        let managerChoices = managers.map((manager) => {
            return {
                name: manager.getName(),
                value: manager.id
            }
        });
        managerChoices.unshift({
            name: 'None',
            value: null
        });

        let prompt = [
            {
                type: 'list',
                message: "Which employee's role do you want to update?",
                choices: employeeChoices,
                loop: true,
                name: 'updatedEmployee'
            },
            {
                type: 'list',
                message: "Which role do you want to assign the selected employee to?",
                choices: roleChoices,
                loop: true,
                name: 'updatedRole'
            },
            {
                type: 'list',
                message: "Who is the employee's new manager?",
                choices: managerChoices,
                loop: true,
                name: 'updatedManager'
            }
        ];
        return prompt;
    }
    async run() {
        const prompt = await this.getPrompt();
        const answers = await inquirer.prompt(prompt);
        let updatedEmployee = new Employee();
        updatedEmployee.id = answers.updatedEmployee;
        updatedEmployee.role_id = answers.updatedRole;
        updatedEmployee.manager_id = answers.updatedManager;
        await updatedEmployee.updateEmployeeRecord();
        return
    }
}

module.exports = UpdateEmployeeRole;