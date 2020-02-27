const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transactions;
const TransactionsSchema = new Schema({
    account_num: {
        type: String,
    },
    txn_id: {
        type: String,
        required: true,
    },
    cp_account_num: {
        type: String,
    },
    cp_email: {
        type: String,
    },
    cp_name: {
        type: String,
    },
    txn_status: {
        type: String,
    },
    txn_type: {
        type: String,
    },
    fi_type: {
        type: String,
    },
    from_to: {
        type: String,
    },
    txn_gross_amount: {
        type: String,
    },
    txn_fee: {
        type: String,
    },
    txn_date: {
        type: Date,
    },
});
module.exports = Transactions = mongoose.model('transactions', TransactionsSchema);
