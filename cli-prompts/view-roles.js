const connection = require('../config/connection');
const cTable = require('console.table');

const Action = require('./action');

class ViewRoles extends Action {
    sql = 'SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles JOIN departments ON roles.department_id = departments.id;';
    async run() {
        const roles = await connection.promise().query(this.sql)
            .then((results) => results[0])
            .then((rows) => {
                console.table(rows);
            })
            .catch((err) => {
                throw err;
            });
        return roles;
    }
}

module.exports = ViewRoles;