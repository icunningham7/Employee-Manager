const connection = require('../config/connection');
const Role = require('../models/role')
const cTable = require('console.table');

const Action = require('./action');

class ViewRoles extends Action {
    async run() {
        const roles = await Role.getAllRoles();
        const rowPromises = roles.map((role) => role.toRow());
        const rows = await Promise.all(rowPromises);
        console.table(`\n All Roles`, rows);
        return
    }
}

module.exports = ViewRoles;