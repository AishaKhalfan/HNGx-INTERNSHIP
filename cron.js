const cron = require('node-cron');
const child_process = require('child_process');

cron.schedule('*/15 * * * *', () => {
  child_process.exec('ping https://hngx-people.onrender.com/', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
      console.log(stdout);
    }
  });
});
