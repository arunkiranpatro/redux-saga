const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User;
const UsersSchema = new Schema({
    AccountNumber: {
        type: String,
        required: true,
    },
    Opportunity: {
        type: String,
    },
    PrimaryEmail: {
        type: String,
    },
    AccountName: {
        type: String,
    },
    MerchantCategory: {
        type: String,
    },
});
module.exports = User = mongoose.model('users', UsersSchema);
