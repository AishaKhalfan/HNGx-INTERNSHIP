const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port  = 3000;

let people = [
  { id: 1, name: 'Aisha' },
  { id: 2, name: 'Atesh' },
  { id: 3, name: 'Atieno' },
];

app.use(bodyParser.json());

//GET all items
app.get('/items', (req, res) => {
  res.json(people);
});

//GET a specific person
app.get('/items/:id', (req, res) => {
  const id  = parseInt(req.params.id);
  const person = people.find((person) => person.id === id);
  if (!person){
    res.status(404).json({ message: 'Person not found'})
  } else {
    res.json(person);
  }
});

//POST: add a new person
app.post('/items', (req, res) => {
  const newPerson = req.body;
  if (!newPerson.name) {
    res.status(404).json({ message: 'Name is required'});
  } else {
    newPerson.id =  people.length + 1;
    people.push(newPerson);
    res.status(201).json(newPerson);
  }
  });

//PUT:updating a Person by ID
app.put('items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPerson = req.body;
  const index = people.findIndex((person) => person.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Person not found'});
  } else {
    people[index] = {...people[index],  ...updatedPerson };
    res.json(data[index]);
  }
});

// DELETE request to delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = people.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    data.splice(index, 1);
    res.json({ message: 'Item deleted' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
