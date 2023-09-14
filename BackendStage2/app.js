const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/hngx';

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

const app = express();
app.use(bodyParser.json()); // Use bodyParser middleware for parsing JSON

// Define a Person schema and model using Mongoose
const personSchema = new mongoose.Schema({
  name: String,
  id: Number,
}, { versionKey: false, // Disable the version key

});

const Person = mongoose.model('Person', personSchema);

//entry point
app.get('/api', (req, res)  => {
  console.log('Welcome to my Stage2 API');  
});

//Get all Persons
app.get('/api/people', async (req, res) => {
  try {
    const people = await Person.find(); // Retrieve all documents from the Person collection

    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Create a new person
app.post('/api/person', async (req, res) => {
  try {
    //count the existing people in the DB
    //const count = await Person.countDocuments();

    //create new person with autoGen ID	  
    const person = new Person({
      name: req.body.name,
      //id: count + 1, //Automatic ID
    });

    await person.save();

    res.status(201).json(person);
  } catch (err) {
    console.error('Error creating person:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a person by ID
app.get('/api/person/:id', async (req, res) => {
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
app.put('/api/person/:id', async (req, res) => {
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
app.delete('/api/person/:id', async (req, res) => {
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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

