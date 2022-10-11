const connection = require('../config/connection');
const Employee = require('../models/employee');
const cTable = require('console.table');
const Action = require('./action');
const inquirer = require('inquirer');

class ViewEmployees extends Action {

    async getPrompt() {

        const managers = await Employee.getAllEmployees();
        let managerChoices = managers.map((manager) => {
            return {
                name: manager.getName(),
                value: manager.id
            }
        });
        let prompt = [
            {
                type: 'list',
                message: "Which manager's reports do you want to see?",
                choices: managerChoices,
                loop: true,
                name: 'manager'
            },
        ];
    }
    async run() {
        const managers = await this.getPrompt();
        const answers = await inquirer.prompt(prompt);
        let manager = new Employee();
        manager.id = answers.manager;
        manager.name = manager.getName();
        const employees = await manager.getEmployeesByManager();
        const rowPromises = employees.map((employee) => employee.toRow());
        const rows = await Promise.all(rowPromises);
        console.table(`\n Managed Employees`, rows);
        return
    }
}

module.exports = ViewEmployees;

