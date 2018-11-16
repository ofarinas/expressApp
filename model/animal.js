const mongoose = require('mongoose');
const animalSchema = mongoose.Schema({name: String, type: String, color: String});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
