// import  Department from "./department.js";
const connection = require('../config/connection');
const cTable = require('console.table');

class Role {
    constructor() {
        this.sql;
    }

    static async getAll() {
        const roles = await connection.promise().query('SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles JOIN departments ON roles.department_id = departments.id;')
            .then((results) => results[0])
            .then((rows) => {
                console.log(rows);
                console.table(rows);
            })
            .catch((err) => {
                throw err;
            });
        return roles;
    };

}


module.exports = Role;