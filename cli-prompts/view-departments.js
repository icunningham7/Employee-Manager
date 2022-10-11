const connection = require('../config/connection');
const cTable = require('console.table');
// const Department = require('../models/department.js');
const Action = require('./action.js');

class ViewDepartments extends Action {
    sql = 'SELECT * FROM departments;';
    async run() {
        const departments = await connection.promise().query(this.sql)
            .then((results) => results[0])
            .then((rows) => {
                console.table(rows);
            })
            .catch((err) => {
                throw err;
            });
        return departments;
    }
}

module.exports = ViewDepartments;