const express = require('express');
const app = express();
//mongoose.connect('mongodb+srv://ofarinas12@gmail.com:Luis_airam12@cluster0-qg49r.mongodb.net/test?retryWrites=true', {useMongoClient: true});
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/test';
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const login = require('./api/login');
const addPerson = require('./api/addPerson');
//mongoose.connect('mongodb://ofarinas12:osvaldo12@ds215633.mlab.com:15633/mongo');
mongoose.connect(CONNECTION_URI);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.post('/login/', function (req, res) {
    login(req.body.email, req.body.password, res);
});
app.post('/addPerson/', function (req, res) {
    console.log('request ', req.body);
    console.log('hallo we are inside');
    res.send(true);
    //  addPerson(req.params.nameId, req.params.amountOfDebtId, res);
});


app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
//const appState = new AppState({user: new User({email:"adminSamay",password:"adminSamay"})});
//appState.save().then((req) => console.log('appState' + req), err => console.log(err));
