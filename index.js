const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
// const bcryptjs = require("bcryptjs");

const app = express();

// Mongoose connects the app to the mongoDB.
mongoose.connect('mongodb://localhost:27017/Baby-sitters', () => {
  console.log('connected successfully to databse');
});
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes

// import routes
const registrationRoutes = require('./routes/parentsRegistration');
app.use('/register', registrationRoutes);

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Juior Baby Center' });
});
app.get('/index', (req, res, next) => {
  res.render('index', { title: 'Juior Baby Center' });
});

app.get('/About', (req, res, next) => {
  res.render('about', { title: 'About us' });
});

app.get('/Parents', (req, res, next) => {
  res.render('parents', { title: 'Parents' });
});

app.get('/Babysitter', (req, res, next) => {
  res.render('babysitter', { title: 'Baby Sitters' });
});

app.get('/Register', (req, res, next) => {
  res.render('register', { title: 'Register' });
});

app.get('/Appointment', (req, res, next) => {
  res.render('appointment', { title: 'Appointment' });
});

//serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  );
}

//Setting the server and to Listen to port 3000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
