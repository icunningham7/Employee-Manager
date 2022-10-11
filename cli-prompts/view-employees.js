const connection = require('../config/connection');
const Employee = require('../models/employee');
const cTable = require('console.table');
const Action = require('./action');

class ViewEmployees extends Action {
    async run() {
        const employees = await Employee.getAllEmployees();
        const rowPromises = employees.map((employee) => employee.toRow());
        const rows = await Promise.all(rowPromises);
        console.table(`\n All Employees`, rows);
        return
    }
}

module.exports = ViewEmployees;

