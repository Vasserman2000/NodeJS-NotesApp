console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const myName = os.userInfo().username;
const notes = require('./notes.js');
const _ = require('lodash');

// fs.appendFileSync('greetings.txt', `Hello ${myName}! You are ${notes.age}`);

// string: res = notes.addNote();

// console.log(res);

// console.log(notes.add(9, -2));

console.log(_.isString(true));
console.log(_.isString('Elisha'));

var filteredArray = _.uniq(['Elisha', 1, 'Elisha', 1, 2, 3, 4]);
console.log(filteredArray);