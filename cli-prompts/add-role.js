const inquirer = require('inquirer');
const Action = require('./action');
const Role = require('../models/role');
const Department = require('../models/department');

class AddRole extends Action {

    async getPrompt() {
        const departments = await Department.getAllDepartments();
        let departmentChoices = departments.map((department) => {
            return {
                name: department.name,
                value: department.id
            }
        });

        let prompt = [
            {
                type: 'input',
                message: "What is the name of the role?",
                name: 'roleName'
            },
            {
                type: 'number',
                message: "What is the salary of the role?",
                name: 'roleSalary'
            },
            {
                type: 'input',
                message: "Which department does the role belong to?",
                choices: departmentChoices,
                loop: true,
                name: 'roleDepartment'
            },
        ];
        return prompt;
    }

    async run() {
        const prompt = await this.getPrompt();
        const answers = await inquirer.prompt(prompt);
        let newRole = new Role();
        newRole.title = answers.roleName;
        newRole.salary = answers.salary;
        newRole.department_id = answers.roleDepartment;

        await newRole.createRoleRecord();
        return
    }
}

module.exports = AddRole;