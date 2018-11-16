const AppState = require('../model/appState');
const User = require('../model/user').user;

function login(email, password, req) {
    AppState.find({}, (err, appState) => {
        console.log(appState[0]);
        console.log('email',appState[0].user.email);
        console.log('email from request',email);
        req.send(appState[0].user.email == email && appState[0].user.password == password);
    });
}

module.exports = login;

