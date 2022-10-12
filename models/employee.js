const connection = require("../config/connection");

class Employee {
    constructor(data = {}) {
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.role_id = data.role_id;
        this.role_title = data.role_title;
        this.salary = data.salary;
        this.department_name = data.department_name;
        this.manager_id = data.manager_id;
        this.manager_name = data.manager_name;
    };

    getName() {
        return `${this.first_name} ${this.last_name}`;
    };

    async loadRoleTitle() {
        if (this.role_title) {
            return
        }
        const sql = "SELECT roles.title FROM roles WHERE roles.id = ?;"

        const data = await connection.promise().query(sql, [this.role_id]);
        this.role_title = data[0].title;
        console.log(this.role_title);
    };

    async loadManagerName() {
        if (this.manager_name) {
            return
        }
        const sql = "SELECT CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employees AS manager WHERE manager.id = ?;";

        const data = await connection.promise().query(sql, [this.manager_id]);
        this.manager_name = data[0].manager_name;
        console.log(this.manager_name);
    };


    async toRow() {
        await this.loadRoleTitle();
        await this.loadManagerName();
        const row = { 
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            title: this.role_title,
            department: this.department_name,
            salary: this.salary,
            manager: this.manager_name
        }
        return row;
    };

    static async getAllEmployees() {
        const sql = "SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, roles.title AS role_title, departments.name AS department_name, roles.salary, employees.manager_id, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees manager ON employees.manager_id = manager.id;";
        const allEmployees = await connection.promise().query(sql);
        return allEmployees[0].map((row) => {
            return new Employee(row)
        });
    };

    static async getEmployeesByManager() {
        const sql = "SELECT * FROM employees WHERE manager_id = ?;";
        const allEmployees = await connection.promise().query(sql, [this.id]);
        return allEmployees[0].map((row) => {
            return new Employee(row)
        });
    }

    async createEmployeeRecord() {
        console.log(`Added ${this.first_name} ${this.last_name} to the database`);
        const sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
        await connection.promise().query(sql, [this.first_name, this.last_name, this.role_id, this.manager_id]);
        return
    }

    async updateEmployeeRecord() {
        console.log(`Updated employee in the database`);
        const sql = "UPDATE employees SET role_id = ?, manager_id = ? WHERE id = ?;";
        await connection.promise().query(sql, [this.id, this.role_id, this.manager_id]);
        return
    }
}

module.exports = Employee;