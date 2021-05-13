const playstore = require('./playstore');
const fs = require('fs')
const CLI = require('clui');
const { clear } = require('console');
const Spinner = CLI.Spinner;
const inquirer = require('./inquirer');
const table = require('./table');
const PLAY_STORE_MISSING_SECRET = "You haven't imported your Google Play Store secret. Please generate it and put it in `credentials/playstore`."
const PLAY_STORE_EXISTING_SECRET = "Found your Google Play Store secret..."

const PLAY_STORE_SECRET_PATH = './credentials/playstore/secrets.json'

module.exports = {
    launch: (result) => {
        if (result.includes("Play Store")) {
            module.exports.playStore();
        }
        if (result.includes("AppStore")) {

        }
    },
    playStore: async () => {
        try {
            if (fs.existsSync(PLAY_STORE_SECRET_PATH)) {
                var rawdata = fs.readFileSync(PLAY_STORE_SECRET_PATH);
                var key = JSON.parse(rawdata);
                clear();
                var countdown = new Spinner("Authenticating", ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
                //ask for packagename
                const packageName = (await inquirer.askForPackageName())["packageName"];
                countdown.start();
                playstore.init(key);
                await playstore.createEdit(packageName).then( async (androidApi) => {
                    countdown.stop();
                   const trackData = await playstore.tracks(androidApi, packageName);
                   table.googlePlayTracks(trackData);
                });
            }
            else {
                console.log("\x1b[31m", PLAY_STORE_MISSING_SECRET);
            }
        } catch (err) {
            console.error(err)
        }
    }
};