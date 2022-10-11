const connection = require('../config/connection');
const Department = require('../models/department');
const cTable = require('console.table');
const Action = require('./action.js');

class ViewDepartments extends Action {
    async run() {
        const departments = await Department.getAllDepartments();
        const rowPromises = departments.map((department) => department.toRow());
        const rows = await Promise.all(rowPromises);
        console.table(`\n All Departments`, rows);
        return
    }
}

module.exports = ViewDepartments;