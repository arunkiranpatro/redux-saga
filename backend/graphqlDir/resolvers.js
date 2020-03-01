const User = require('../models/users');

module.exports = {
    user({ AccountNumber }) {
        let data = null;
        console.log(AccountNumber);
        User.find({ AccountNumber: AccountNumber })
            .then(users => {
                data = users[0];
                console.log(data);
                data = { AccountNumber: data.AccountNumber };
                console.log(data);
                return (data);
            }
            )
            .catch(err => console.log(err));

    }
}