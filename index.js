const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('My Twelfth Assignment Server Is Running');
})

app.listen(port, () => console.log(`My Twelfth Assignment Server Is running on ${port}`))