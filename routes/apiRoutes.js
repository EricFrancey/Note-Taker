const api = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// post new notes
api.post('/api/notes', (req,res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'))
    let newNote = req.body;
    newNote.id = uuidv4();


    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);


});

module.exports = api;