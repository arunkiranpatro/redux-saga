const express = require('express');
const User = require('../../models/users');

const router = express.Router();

router.post('/', (req, res) => {
    const account_number = req.body.account_number;
    console.log(account_number);
    User.find({ AccountNumber: account_number })
        .then(users => res.status(200).json(users[0]))
        .catch(err => console.log(err));
});
module.exports = router;
