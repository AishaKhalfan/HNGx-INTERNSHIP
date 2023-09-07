const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day and time in UTC
  const utcTime = moment().utc();
  const currentDay = utcTime.format('YYYY-MM-DDTHH:mm:ssZ');

  // GitHub URL of the file being run
  const githubfileUrl = `https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/BackendStage1/app.js`;
  const githubRepo = `https://github.com/AishaKhalfan/HNGx-INTERNSHIP`;

  // Calculate UTC time with validation of +/-2 hours
  //const utcOffset = utcTime.utcoffset().total_seconds() / 3600; // Convert offset to hours
  //const isWithinRange = Math.abs(utcOffset) <= 2;

  //if (slackName && track && isWithinRange) {
    const response = {
      'Slack name': slackName,
      'Current day of the week': currentDay,
      'Current UTC time': utcTime.toString(),
      'Track': track,
      'GitHub URL of the file being run': githubfileUrl,
      'GitHub URL of the full source code': githubRepo,
      'Status Code': 200,
    };
    res.json(response);
  } else {
    res.json({'error': 'Invalid input parameters or UTC offset out of range'});
  }
});

app.listen(5000, () => console.log('API is listening on port 5000'));
