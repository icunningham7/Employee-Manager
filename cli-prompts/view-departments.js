const { Department } = require('../models/department.js');
const Action = require('./action.js');

class ViewDepartments extends Action {

    async run() {
        const departments = await Department.findAll();
        console.log('All Departments:', JSON.stringify(departments, null, 2));
    }
}

module.exports = ViewDepartments;