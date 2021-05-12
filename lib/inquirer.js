const inquirer = require('inquirer');

module.exports = {
    askFirstChoice: () => {
      return inquirer.prompt([ {
        type: 'list',
        name: 'firstChoice',
        message: 'What do you want to do?',
        choices: [
          new inquirer.Separator(),
          'View AppStore app status',
          'View GooglePlayStore app status',
        ],
      },]);
    },
  };