const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import route files
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const peopleRouter = require('./routes/people');

// Define route paths
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api', peopleRouter);

// Import cron job
const cron = require('./cron');

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}/`);
});

