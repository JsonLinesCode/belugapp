const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const scenario  = require('./lib/scenario');

clear();

console.log(
  chalk.blueBright(
    figlet.textSync('BelugApp', { horizontalLayout: 'full' })
  )
);

var choice = inquirer.askFirstChoice().then((e)=>
{
  scenario.launch(e["firstChoice"])
});
