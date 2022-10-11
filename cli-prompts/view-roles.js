const Role = require('../models/role');
const Action = require('./action');

class ViewRoles extends Action {

    async run() {
        const roles = await Role.getAll();
        console.log('All Roles:', JSON.stringify(roles, null, 2));
    }
}

module.exports = ViewRoles;