var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs' );
app.set('views', './app/views');
app.use(expressValidator());
var api = express.Router();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./app/public'));


consign().
include('./app/routes')
.then('./config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);



module.exports = app;