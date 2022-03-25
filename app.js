'use strict';
const app=require('express')();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('dotenv').config();
require('./config/routes')(app);
require('./config/db');

console.log("running on correctly");



