const mongoose = require('mongoose');
const userSchema = require('./user').userSchema;
const personSchema = require('./person').personSchema;

const appStateSchema = mongoose.Schema({
    login: Boolean,
    user: userSchema,
    person: [personSchema],
    index: String
});
const AppState = mongoose.model('AppState', appStateSchema);
module.exports = AppState;