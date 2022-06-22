var express = require('express');
var bodyParser= require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
const cors = require('cors');

var upload = multer();
var app= express();
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(upload.array());

var  books = require('./books.js');

app.use('/books', books);
app.use('/', function(req,res){
	res.send(" this  will not call API");
});

app.listen(5000);