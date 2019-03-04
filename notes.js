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

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    var notes = fs.readFileSync('notes-data.json');
    console.log(JSON.parse(notes));
}

var readNote = (title) => {
    var notes = fs.readFileSync("notes-data.json", 'utf8');
    var jsonNotes = JSON.parse(notes);

    jsonNotes.forEach(note => {
       if (note.title === title) {
           console.log(note);
       }
    });
}

var removeNote = (title) => {
    var notes = fs.readFileSync('notes-data.json', 'utf8');

    var notesJson = JSON.parse(notes);

    notesJson.forEach((note, index) => {
        if (note.title === title) {
            console.log('delete this note:', note.title);
            notesJson.splice(index,1);

            console.log(JSON.stringify(notesJson));
            fs.writeFileSync('notes-data.json', JSON.stringify(notesJson));
        }
    });
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};