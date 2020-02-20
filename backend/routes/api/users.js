const express = require('express');
const User = require('../../models/users');

const router = express.Router();

router.get('/', (req, res) => {
    const account_number = req.body.account_number;
    User.find({ AccountNumber: account_number })
        .then(tasks => res.status(200).json(tasks))
        .catch(err => console.log(err));
});
module.exports = router;
