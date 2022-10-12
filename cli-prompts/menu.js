const inquirer = require('inquirer');
const Action = require('./action');
const AddDepartment = require('./add-department');
const AddEmployee = require('./add-employee');
const AddRole = require('./add-role');
const UpdateEmployeeRole = require('./update-employee-role');
const ViewDepartments = require('./view-departments');
const ViewEmployees = require('./view-employees');
const ViewEmployeesByManager = require('./view-employees-by-manager');
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
            'View Employees by Manager' : ViewEmployeesByManager
        };

        this.prompt = [
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Update Employee Role',  'Add Role',  'Add Department', 'View Employees by Manager', 'Quit'],
                loop: true,
                name: 'menuPrompt'
            }
        ];
    }
    async run() {
        while (true) {
            const answer = await inquirer.prompt(this.prompt)
            if (answer.menuPrompt == 'Quit') {
                return
            }
            const actionClass = this.dict[answer.menuPrompt];
            let action = new actionClass();
            await action.run();
        };
    }
}

module.exports = MainMenu;
