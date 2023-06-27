const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
// const cors = require('cors');

// app.use(cors())
app.use(express.json())

var db = null;

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        db = client.db('gamerankings');
        const gamesCollection = db.collection('games');
    }).catch(console.error)

const addToMongo = (gamesArray) => {
    for (results in gamesArray) {
        for (game in results) {
            db.collection('games').insertOne(game);
        }
    }
}

const getAllGames = () => {
    const allGames = [];
    for (let i = 1; i <= 100; i++) {
        const newFetch = fetch("https://api.rawg.io/api/games?page=" + i + "&page_size=40&key=362bb5d0da074b7ab10c431a707dd76e&")
        .then((response) => response.json())
        allGames.push(newFetch);
    }
    Promise.all(allGames)
    .then((data) => addToMongo(allGames));
}

getAllGames();

app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
})