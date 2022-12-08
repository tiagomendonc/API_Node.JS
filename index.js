require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => {
    console.log("Aplicação rodando na porta 4000");
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})