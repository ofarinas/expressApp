const AppState = require('../model/appState');
const Person = require('../model/person').person;

function addPerson(person, req) {
    AppState.find({}, (err, appState) => {
        appState[0].person.push(new Person(person));
        appState[0].person.save();
        req.send(true);
    });
}

function getPersons(req) {
    AppState.find({}, (err, appState) => {
        req.send(appState[0].person);
    });
}

module.exports.addPerson = addPerson;
module.exports.getPersons = getPersons;
