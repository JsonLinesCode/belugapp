const inquirer = require('inquirer');

module.exports = {
  askFirstChoice: () => {
    return inquirer.prompt([{
      type: 'list',
      name: 'firstChoice',
      message: 'What do you want to do?',
      choices: [
        new inquirer.Separator(),
        'View App Store app status',
        'View Google Play Store app status',
      ],
    },]);
  },
  askForPackageName: () => {
    return inquirer.prompt([{
      type: 'string',
      name: 'packageName',
      message: 'What is your package name ?',
     
    },]);
  },

};