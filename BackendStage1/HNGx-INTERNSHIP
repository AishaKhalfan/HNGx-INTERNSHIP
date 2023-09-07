const express = require('express');
const moment = require('moment');
const github = require('@octokit/rest');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my HNGx stage1 API!');
});

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;
  //const slackName = 'AishaKhalifan';
  //const track = 'Backend';
  if (!slackName || !track) {
    res.status(400);
    res.json({
      error: 'Please provide the slack_name and track query parameters',
    });
    return;
  }

  const now = moment().utc();
  const utcTime = now.format('YYYY-MM-DDTHH:mm:ssZ');

  const githubFileUrl = `"https://github.com/AishaKhalfan/HNGx-INTERNSHIP/blob/main/BackendStage1/app.js`;
  const githubRepoUrl = `"https://github.com/AishaKhalfan/HNGx-INTERNSHIP/`;

  const response = {
    slack_name: slackName,
    current_day: moment().format('dddd'),
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('App is listening on port http://localhost:3000/');
});
