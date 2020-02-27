const express = require('express');
const Transactions = require('../../models/transactions');

const router = express.Router();

router.post('/', (req, res) => {
    const account_number = req.body.account_number;
    console.log(account_number);
    Transactions.find({ account_num: account_number })
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err));
});

router.get('/getAll', (req, res) => {
    Transactions.find()
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err));
});
module.exports = router;
