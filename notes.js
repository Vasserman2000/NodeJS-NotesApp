const fs = require('fs');

var addNote = (title, body) => {

    var notes = [];

    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        console.log(e);
    }


    var duplicateNotes = notes.filter( (note) => note.title === title );
console.log(duplicateNotes);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Getting all notes!');
}

var readNote = (title) => {
    console.log('Getting note with title: ', title);
}

var removeNote = (title) => {
    console.log('Removing note with title: ', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};