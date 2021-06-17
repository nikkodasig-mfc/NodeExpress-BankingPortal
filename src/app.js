const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Configure the view directory and engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Configure the static directory
app.use(express.static(path.join(__dirname, 'public')));

const accountData = fs.readFileSync(path.join(__dirname, '/json/accounts.json'), 'UTF8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(path.join(__dirname, '/json/users.json'), 'UTF8');
const users = JSON.parse(userData);

app.get('/', (req, res) => {
  res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.get('/savings', (req, res) => {
  res.render('account', { title: 'Savings', account: accounts.savings });
});

app.get('/credit', (req, res) => {
  res.render('account', { title: 'Credit', account: accounts.credit });
});

app.get('/checking', (req, res) => {
  res.render('account', { title: 'Checking', account: accounts.checking });
});

app.get('/profile', (req, res) => {
  res.render('profile', { user: users[0] });
});

// Create the server that will listen on port 3000
app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});