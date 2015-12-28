/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var port = process.env.PORT || 8001;
var httpProxy = require('http-proxy');
var url = require('url');

// app.use(logger('dev'));

console.log('About to crank up node');
console.log('PORT: ' + port);

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./app/'));
app.use(express.static('./.tmp/'));
app.use(express.static('./'));

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname  +
    '\nprocess.cwd = ' + process.cwd());
});
