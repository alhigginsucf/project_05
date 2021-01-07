const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const PORT = 3001

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cruddatabase',
});

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});