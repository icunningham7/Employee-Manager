const inquirer = require('inquirer');
const Action = require('./action');
const AddEmployee = require('./add-employee');
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
            // 'View All Departments': ViewDepartments,
            // 'Add Employee': AddEmployee
        };

        this.prompt = [
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
                loop: true,
                name: 'menuPrompt'
            }
        ];
    }
    async run() {
        while (!this.quit) {
            const answer = await inquirer.prompt(this.prompt)
            if (answer.menuPrompt === 'Quit') {
                return
            }
            const actionClass = this.dict[answer.menuPrompt];
            let action = new actionClass();
            await action.run();
        }
    }
}

module.exports = MainMenu;

// View all
    // No additional info needed
    // Show list of all empls
// View all roles
    // Show list of all roles
        // id, title, department, salary
// View all departments
    // Show list of all depts

// Add Empl
    // Questions to ask for fName, lName, Role, and Manager
        // Role requires a lookup of all roles from the database
        // Manager requires a lookup of all employees from the database
    // Write record to the employee table
// Add Role
    // Questions for title, salary, and dept
        // department requires a lookup for all departments from the database

// Update Employee Role
    // Lookup list of all employees
    // Get selected employee
    // Update role_id of select employee to match new value
