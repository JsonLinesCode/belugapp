var { google } = require('googleapis');
var jwtClient;
var play;
var editId;
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2();

module.exports = {

    init: (key) => {
        // editing "scope" allowed for OAuth2
        var scopes = [
            'https://www.googleapis.com/auth/androidpublisher'
        ];
        // here, we'll initialize our client

        jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, scopes, null);

    },
    createEdit: async (packageName) => {
        return new Promise(async function (resolve, reject) {
            const androidApi = google.androidpublisher({
                version: 'v3',
                auth: jwtClient
            })
            google.options({ auth: jwtClient });

            let authorize = await jwtClient.authorize();
            //insert edit
            let res = await androidApi.edits.insert({
                packageName: packageName
            });
            editId = res.data.id
            resolve(androidApi);
        });
    },
    tracks: async (androidApi, packageName) => {
        const res2 = await androidApi.edits.tracks.list({
            editId: editId,
            packageName: packageName
        });
        console.log(res2.data.tracks);
    }

};