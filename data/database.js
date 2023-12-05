const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('poemGenerator')
}

function getDB(){
    if(!database){
        throw new Error('NO Database');
    }
    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDB: getDB
}