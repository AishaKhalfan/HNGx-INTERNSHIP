// routes/people.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Add your MongoDB connection setup here
//'mongodb://localhost:27017/hngx';
const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  console.log('Connected to database');
});

// Use bodyParser middleware for parsing JSON
router.use(bodyParser.json());

// Define a Person schema and model using Mongoose
const personSchema = new mongoose.Schema({
  name: String,
  id: Number,
}, { versionKey: false });

const Person = mongoose.model('Person', personSchema);

// Get all Persons
router.get('/people', async (req, res) => {
  try {
    const people = await Person.find(); // Retrieve all documents from the Person collection

    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new person
router.post('/person', async (req, res) => {
  try {
    const person = new Person({
      name: req.body.name,
    });

    await person.save();

    res.status(201).json(person);
  } catch (err) {
    console.error('Error creating person:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a person by ID
router.get('/person/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a person by ID
router.put('/person/:id', async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a person by ID
router.delete('/person/:id', async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

