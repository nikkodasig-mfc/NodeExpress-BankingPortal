const express = require('express');
const router = express.Router();
const { accounts, writeJSON } = require('../data');

router.get('/transfer', (req, res) => {
  res.render('transfer', { user: users[0] });
});

router.get('/payment', (req, res) => {
  res.render('payment', { account: accounts.credit });
});

router.post('/payment', (req, res) => {
  const amount = parseInt(req.body.amount, 10);
  accounts.credit.balance -= amount;
  accounts.credit.available += amount;

  writeJSON();

  res.render('payment', { message: 'Payment Successful', account: accounts.credit });
});

router.post('/transfer', (req, res) => {
  const amount = parseInt(req.body.amount, 10);

  accounts[req.body.from].balance -= amount;
  accounts[req.body.to].balance += amount;

  writeJSON();

  res.render('transfer', { message: 'Transfer Completed' });
});

module.exports = router;
