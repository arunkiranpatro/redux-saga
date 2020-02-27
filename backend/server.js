import schema from './graphqlDir/schema';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const users = require('./routes/api/users');
const transactions = require('./routes/api/transactions');

const app = express();
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use('/api/users', users);
app.use('/api/transactions', transactions);

const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

const root = { hello: () => 'hi I am graphql' };
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
