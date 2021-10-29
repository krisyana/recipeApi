const { MongoClient } = require('mongodb');

const url =
    'mongodb+srv://krisna:57476266aa@cluster0.d1ka9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbName = 'recipeDB';
let database = null;
async function connect() {
    await client.connect();
    const db = client.db(dbName);
    database = db;
}

function getDb() {
    return database;
}

module.exports = { connect, getDb };