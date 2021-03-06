const router = require('express').Router();

const { deleteByID, createNewNote, validateNote, findBYID} = require('../../lib/notes');
const { notes } = require('../../db/db.json');
console.log(notes);
// getting all notes to json
router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
});

// getting a single note in json by id
router.get('/notes/:id', (req,res) => {
    const result = findBYID(req.params.id, notes);
    res.json(result);
});

// post a new note
router.post('/notes', (req, res) => {
    req.body.id = Date.now().toString();
    
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    }
    else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// deleting a note
router.delete('/notes/:id', (req,res) => {
    const note = deleteByID(req.params.id, notes);
    res.json(note);
});

module.exports = router;