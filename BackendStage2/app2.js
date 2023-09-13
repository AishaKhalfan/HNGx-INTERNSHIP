const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');

const connectionString = 'mongodb://localhost:27017/my_database';

const db = await MongoClient.connect(connectionString);

await db.createCollection('my_database', {
  collection: 'people',
});

db.on('error', (err) => {
console.error(err);
});

db.on('connect', () => {
console.log('Connected to database');
});

app.post('/api/person', (req, res) => {
// Create a new person object.
const person = {
name: req.body.name,
age: req.body.age,
};

// Save the person to the database.
db.collection('people').insertOne({ name: person.name, age: person.age });

res.send(person);
});

app.get('/api/person/:id', (req, res) => {
// Get the person from the database.
const id = req.params.id;

db.collection('people').findOne({ _id: id }, (err, person) => {
if (err) {
console.error(err);
} else {
if (!person) {
res.status(404).send('Person not found');
} else {
res.send(person);
}
}
});
});

app.put('/api/person/:id', (req, res) => {
// Update the person in the database.
const id = req.params.id;
const person = {
name: req.body.name,
age: req.body.age,
};

db.collection('people').updateOne({ _id: id }, { $set: { name: person.name, age: person.age } });

res.send(person);
});

app.delete('/api/person/:id', (req, res) => {
// Delete the person from the database.
const id = req.params.id;

db.collection('people').deleteOne({ _id: id });

res.sendStatus(204);
});
