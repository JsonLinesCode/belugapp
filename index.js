const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
clear();
console.log(
  chalk.blueBright(
    figlet.textSync('BelugApp', { horizontalLayout: 'full' })
  )
);
inquirer.askFirstChoice();