const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cruddatabase',
})