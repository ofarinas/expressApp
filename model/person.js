const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name: String,
    amountOfDebt: String
});

const Person = mongoose.model('Person', personSchema);
module.exports.person = Person;
module.exports.personSchema = personSchema;