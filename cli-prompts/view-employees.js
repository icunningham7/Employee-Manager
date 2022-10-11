const connection = require('../config/connection');
const cTable = require('console.table');

const Action = require('./action');

class ViewEmployees extends Action {
    sql = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees m ON employees.manager_id = m.id;";
    async run() {
        const employees = await connection.promise().query(this.sql)
            .then((results) => results[0])
            .then((rows) => {
                console.table(rows);
            })
            .catch((err) => {
                throw err;
            });
        return employees;
    }
}

module.exports = ViewEmployees;