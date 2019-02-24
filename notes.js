console.log('Starting notes.js');

module.exports.age = 33;

module.exports.addNote = () => {
    console.log("addNote");

    return "New note";
};

module.exports.add = function (a, b) { return a + b; }