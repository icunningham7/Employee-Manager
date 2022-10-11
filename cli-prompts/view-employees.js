const { Employee } = require('../models/employee');
const Action = require('./action');

class ViewEmployees extends Action {

    async run() {
        const employees = await Employee.findAll();
        console.log('All Employees:', JSON.stringify(employees, null, 2));

    }
}

module.exports = ViewEmployees;