const { RawIntra } = require('epitech.js');
const { PuppeteerAuthProvider } = require('@epitech.js/puppeteer-auth-provider');
const { exec } = require('child_process');
const fs = require("fs");
const settings = require("./settings.json");


(async function(){

    const intra = new RawIntra({
        provider: new PuppeteerAuthProvider({
            storageFilePath: './storage.json',
        })
    });

    const calendar_file = await intra.getCalendarFile(settings.calendar);
    calendar_file.pipe(fs.createWriteStream("calendar.ical"));

    const cmd = `rm -rf calendar_folder && git clone ${settings.url} --depth=1 calendar_folder && mv calendar.ical calendar_folder && cd calendar_folder && git add -A && (git commit -am "update" && git push) || exit 0`

    exec(cmd);

})();
