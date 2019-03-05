const fs = require('fs');
const chalk = require('chalk');

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
        console.log(chalk.bgGreen('Note added: ', JSON.stringify(note)));
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
            console.log(chalk.bgRed('deleting a note with title: ', note.title));
            notesJson.splice(index,1);

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