const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
var session = require('express-session')

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(session({
  secret: process.env.REACT_APP_SESSION_SECRET,
  name: "aSession",
  saveUninitialized: true,
  resave: true,
  proxy: app.get('env') === 'production',
  cookie: {
    secure: app.get('env') === 'production'
  }
}))

// mongostore (store session date in db)

// extra settings for production enviroment

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


app.use('/', require('./routes/products-routes'));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/order'));
app.use('/', require('./routes/address'));

app.use(express.static(__dirname + '/build'));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/build/index.html");
});

module.exports = app;

app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));
