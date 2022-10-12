const MainMenu = require('./cli-prompts/menu');

async function init() {
    const menu = new MainMenu();
    await menu.run();
    return
 };

init().then(() => process.exit());


