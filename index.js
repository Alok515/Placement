const express = require('express');
const mongooseConnect = require('./config/mongoInit');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongooseConnect();



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('listening on port '+PORT));