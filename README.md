# EpitechCalendar

## Images are going to be added later.

How to update your google calendar by exposing on github (Yea you must really don't mind).

Clone this repository: `git@github.com:HelifeWasTaken/EpitechCalendar`

Install npm dependencies:

```
npm install epitech.js
npm install @epitech.js/puppeteer-auth-provider
```

Create a repository to hold your calendar file and modify the settings.json file to meet your needs.
(For the repository url only use ssh)

Make a new calendar on google by url and give it the raw url (You can find it by clicking on the Raw button when you are accessing your file on github).
Be sure to activate Sync on your calendar on: `https://calendar.google.com/calendar/syncselect`

If that worked for you, you can now automate the process with a crontab.

Type `crontab -e` and the copy paste this line and change the required:
```
0 */6 * * * cd /full/path/to/app; ((/full/path/to/node . &> tmplog && echo "$(date): OK" >> log) || echo "$(date): KO" >> log ; cat tmplog >> log) ; rm -f tmplog >/dev/null 2>&1
```
Will run the update every 6 hours (Be aware that google will take modifications into account only every 8-24 hours)
