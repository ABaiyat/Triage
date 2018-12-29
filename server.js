const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const passportjwt = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);

mongoose.connection.on('connected', () => {
  console.log('Connected to DB');
});

mongoose.connection.on('error', err => {
  console.log('DB Error ' + err);
});

const app = express();
const port = process.env.PORT || 5000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('', (req, res) => {
  res.send('Triage');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
