//this file automates this: mongoexport --db hngx --collection people --out exported-hngx.json
const fs = require('fs');
const { MongoClient } = require('mongodb');
const cron = require('node-cron');

const connectionString = 'mongodb://localhost:27017/hngx';
const outputFilePath = 'exported-hngx.json';

async function exportData() {
  try {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db(); // Use the default database

    const collection = db.collection('people'); // Replace with your collection name

    const data = await collection.find({}).toArray();

    // Save the data to the JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

    console.log('Data exported and saved to', outputFilePath);
  } catch (error) {
    console.error('Error exporting data:', error);
  }
}

// Schedule the export to run every hour (adjust the schedule as needed)
cron.schedule('0 * * * *', exportData);

