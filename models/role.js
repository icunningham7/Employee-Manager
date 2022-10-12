const connection = require("../config/connection");


class Role {
    constructor(data = {}) {
        this.id = data.id;
        this.title = data.title;
        this.salary = data.salary;
        this.department_id = data.department_id;
        this.department_name = data.department_name;
    }

    toRow() {
        const row = {
            id: this.id,
            title: this.title,
            department: this.department_name,
            salary: this.salary
        }
        return row;
    };


    static async getAllRoles() {
        const sql = "SELECT roles.id, roles.title, roles.salary, roles.department_id, departments.name AS department_name FROM roles JOIN departments ON roles.department_id = departments.id;";
        const allRoles = await connection.promise().query(sql);
        return allRoles[0].map((row) => {
            return new Role(row)
        });
    };

    async createRoleRecord() {
        console.log(`Added ${this.title} to the database`);
        const sql = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);";
        await connection.promise().query(sql, [this.title, this.salary, this.department_id]);
        return
    }
}

module.exports = Role;