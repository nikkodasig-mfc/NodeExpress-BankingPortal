const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Configure the view directory and engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Configure the static directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Index' });
});

// Create the server that will listen on port 3000
app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});