const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('gamerankings');
        const gamesCollection = db.collection('games');
        const gamesRouter = createRouter(gamesCollection);
        app.use('/api/games', gamesRouter);
    }).catch(console.error)

app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
})