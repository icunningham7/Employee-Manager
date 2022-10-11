const MainMenu = require('./cli-prompts/menu');

function init() {
    const menu = new MainMenu();
    menu.run();
    console.log('passed menu run');
 };

init();


