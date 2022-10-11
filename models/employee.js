// import { Model, DataTypes } from "sequelize";
const mysql = require('mysql2');
// const Role = require('./role');
const connection = require('../config/connection');


class Employee {
    slq = 'SELECT * from employees';
    

    // getAll() {
    //     const employees = connection.promise().query(this.sql);
    //     console.log(employees);
    // }
 }

// Employee.getAll(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         first_name: {
//             type: DataTypes.STRING(30),
//             allowNull: false,
//         },
//         last_name: {
//             type: DataTypes.STRING(30),
//             allowNull: false,
//         },
//         role_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Role,
//                 key: 'id'
//             }
//         },
//         manager_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Employee,
//                 key: 'id'
//             }
//         }
//     },
// );  

module.exports = Employee;