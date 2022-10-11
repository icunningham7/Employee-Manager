// import  Department from "./department.js";
// const connection = require('../config/connection');
// const cTable = require('console.table');

// class Role {
//     constructor() {
//         this.sql = 'SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles JOIN departments ON roles.department_id = departments.id;';
//     };

//     static async findAll() {
//         const roles = await connection.promise().query(this.sql)
//             .then((results) => results[0])
//             .then((rows) => {
//                 console.log(rows);
//                 console.table(rows);
//             })
//             .catch((err) => {
//                 throw err;
//             });
//         return roles;
//     };

// }


// module.exports = Role;