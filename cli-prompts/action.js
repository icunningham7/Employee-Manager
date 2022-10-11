class Action {

    async run() {
        throw new Error('No action implemented!')
    };
};

module.exports = Action;