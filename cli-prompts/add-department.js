const inquirer = require('inquirer');
const Action = require('./action');
const Department = require('../models/department');

class AddDepartment extends Action {

    prompt = [
        {
            type: 'input',
            message: "What is the name of the department?",
            name: 'department'
        },
    ] 

    async run() {
        const answers = await inquirer.prompt(this.prompt);
        let newDepartment = new Department();
        newDepartment.name = answers.department;

        await newDepartment.createDepartmentRecord();
        return
    }
}

module.exports = AddDepartment;