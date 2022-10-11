const inquirer = require('inquirer');
const MainMenu = require('./cli-prompts/menu');

function init() {
    const menu = new MainMenu();
    menu.run();
 };

init();
