const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports.user = User;
module.exports.userSchema = userSchema;