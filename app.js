const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note');
    }
});

yargs.parse();


 
// if (command === 'add') {
//     notes.addNote(argv.title, argv.body);
// } else if (command === 'list') {
//     notes.getAll();
// } else if (command === 'read') {
//     notes.readNote(argv.title);
// } else if (command === 'remove') {
//     notes.removeNote(argv.title);
// } else {
//     console.log('Command not recognized'); 
// } 



