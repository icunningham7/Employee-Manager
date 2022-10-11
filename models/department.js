const connection = require("../config/connection");

class Department {
    constructor(data = {}) {
        this.id = data.id;
        this.name = data.name;
    };

    async toRow() {
        const row = {
            id: this.id,
            name: this.name
        };
        return row;
    };

    static async getAllDepartments() {
        const sql = "SELECT * FROM departments;";
        const allDepartments = await connection.promise().query(sql);
        return allDepartments[0].map((row) => {
            return new Department(row);
        });
    };

    async createDepartmentRecord() {
        console.log(`Added ${this.name} to the database`);
        const sql = "INSERT INTO departments (name) VALUES (?);";
        await connection.promise().query(sql, [this.name]);
        return
    }
}

module.exports = Department;