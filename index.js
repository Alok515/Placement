const express = require('express');
const mongooseConnect = require('./config/mongoInit');
const router = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongooseConnect();

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('listening on port '+PORT));