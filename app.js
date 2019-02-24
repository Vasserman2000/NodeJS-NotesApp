console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const myName = os.userInfo().username;
const notes = require('./notes.js');

fs.appendFileSync('greetings.txt', `Hello ${myName}! You are ${notes.age}`);

string: res = notes.addNote();

console.log(res);

console.log(notes.add(9, -2));