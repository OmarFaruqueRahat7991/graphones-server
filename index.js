const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ypme9qn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const allBrandsCollection = client.db('grabPhones').collection('usedMobilesCollection')

        

    }
    finally {

    }

}
run().catch(console.log());


app.get('/', async (req, res) => {
    res.send('My Twelfth Assignment Server Is Running');
})

app.listen(port, () => console.log(`My Twelfth Assignment Server Is Running On ${port}`))