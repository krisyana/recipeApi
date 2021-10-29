const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connect } = require('./config/mongodb');
const userRoute = require('./routes');

app.use('/users', userRoute);

connect().then(() => {
    console.log('connected to db');
    app.listen(PORT, () => {
        console.log('App is Listening at', PORT);
    });
});