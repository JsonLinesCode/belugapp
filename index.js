const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const scenario = require('./lib/scenario');

clear();
console.log("Welcome to belugapp. This is a really simple API to check your apps status on PlayStore and AppStore.\nPlease check our configuration guide before using it.\n")
var choice = inquirer.askFirstChoice().then((e) => {
  scenario.launch(e["firstChoice"])
});
