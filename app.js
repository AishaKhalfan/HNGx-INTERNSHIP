const express = require('express');
const github = require('@octokit/rest');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my HNGx stage1 API!');
});

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;
  // const slackName = 'AishaKhalifan';
  // const track = 'Backend';
  if (!slackName || !track) {
    res.status(400);
    res.json({
      error: 'Please provide the slack_name and track query parameters',
    });
    return;
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDay = days[new Date().getDay()]; // Get the current day of the week

  // Format the UTC time without milliseconds
  const utcTime = new Date().toISOString().replace(/\.\d+/, '');

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

