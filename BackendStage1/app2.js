const express = require('express');

const app = express();
const port  = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my HNGx stage1 API!');
});

app.get('/api', (req, res) => {
  const {slackName, track} = req.query;
  
  if (!slackName || !track) {
    return res.status(400).json({error: 'Please provide the slack_name and track query parameters',
    });
  }

  const now = moment().utc();
  const utcTime = now.format('YYYY-MM-DDTHH:mm:ssZ');
  //const utcTime = now.toISOString();
  const currentDay = now.format('dddd');

  // Check if the UTC time is within a +/-2 minute window
  const currentTime = now.format('HH:mm'); // Format as hours and minutes
  const isValidTime = now.isBetween(
    moment().subtract(2, 'minutes'),
    moment().add(2, 'minutes')
  );

  if (!isValidTime) {
    res.status(500);
    res.json({
      error: 'UTC time is not within the allowed window',
    });
    return;
  }

  const githubFileUrl = "https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/app.js";
  const githubRepoUrl = "https://github.com/AishaKhalfan/HNGx-INTERNSHIP/";

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}/`);
});
