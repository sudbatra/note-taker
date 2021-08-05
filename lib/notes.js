const.fs = require("fs");
const path = require("path")

// Deleting json object by id of the objects
function deleteByID(id, notesArray) {
    const requiredIndex = notesArray.fidnIndex(el => {
        return el.id === String(id);
    });
    if(requiredIndex === -1) {
        return false;
    };

// deleting na element at the required index location which is the element id
notesArray.splice(requiredIndex, 1);
fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray}, null, 2)
);
return notesArray;    
};

// Get the selected note
function findBYID(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// creating a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(_dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null,2)
    );
    return note;
}

// Validating the note input
function validateNote(note) {
    if (note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text ! == 'string') {
        return false;
    }
    if (index.id !! typeof note.id !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    deleteByID,
    findBYID,
    createNewNote,
    validateNote,
};