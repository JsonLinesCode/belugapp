var Table = require('cli-table');
module.exports = {
    googlePlayTracks: (data) => {
        // instantiate
        var table = new Table({
            head: ['Track', 'Current releases count', 'Last release', 'Last release version codes', 'Last release status']

        });
        //table tracks data
        data.tracks.forEach(element => {
            table.push(
                [element.track, element.releases.length, element.releases[0].name,  element.releases[0].versionCodes, element.releases[0].status]
            );
        });
        console.log(table.toString())
        //module.exports.googlePlayLastRelease(data.tracks.find(element => element.track == "production").releases[0]);
    },
   
    googlePlayLastRelease: (release) => {
        // instantiate
        var table = new Table({
            head: Object.keys(release)

        });
        //table release data
        table.push(
            Object.values(release)
        );
        console.log(table.toString())

    }
};