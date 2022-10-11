const inquirer = require('inquirer');
const Action = require('./action');
const AddDepartment = require('./add-department');
const AddEmployee = require('./add-employee');
const AddRole = require('./add-role');
const UpdateEmployeeRole = require('./update-employee-role');
const ViewDepartments = require('./view-departments');
const ViewEmployees = require('./view-employees');
const ViewRoles = require('./view-roles');

class MainMenu extends Action {

    constructor() {
        super();
        this.quit = false;

        this.dict = {
            'View All Employees': ViewEmployees,
            'View All Roles': ViewRoles,
            'View All Departments': ViewDepartments,
            'Add Employee': AddEmployee,
            'Update Employee Role': UpdateEmployeeRole,
            'Add Role': AddRole,
            'Add Department': AddDepartment,
        };

        this.prompt = [
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Update Employee Role',  'Add Role',  'Add Department', 'Quit'],
                loop: true,
                name: 'menuPrompt'
            }
        ];
    }
    async run() {
        console.log(this.quit);
        while (!this.quit) {
            const answer = await inquirer.prompt(this.prompt)
            console.log(`User ${answer.menuPrompt}`);
            if (answer.menuPrompt == 'Quit') {
                console.log('passed the if');
                this.quit = true;
                return
            }
            const actionClass = this.dict[answer.menuPrompt];
            let action = new actionClass();
            action.run();
        };
    }
}

module.exports = MainMenu;
