const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ypme9qn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const allBrandsCollection = client.db('grabPhones').collection('usedMobilesCollection')

        app.get('/allPhones', async (req, res) => {
            const query = {};
            const categories = await allBrandsCollection.find(query).toArray();
            res.send(categories)
        });

        app.get('/allPhones/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const allCategories = await allBrandsCollection.find(query).toArray();
            res.send(allCategories)
        })

    }
    finally {

    }

}
run().catch(console.log());


app.get('/', async (req, res) => {
    res.send('My Twelfth Assignment Server Is Running');
})

app.listen(port, () => console.log(`My Twelfth Assignment Server Is Running On ${port}`))