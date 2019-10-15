var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var dbconfig = require('./db/dbconfig.js');
var db = require('./sql-db/config.js');
//var Quote = require('./db/models/quote.js');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client')));

// app.post('/quotes', (req, res) => {
// 	new Quote ({
// 		text: req.body.text,
// 		author: req.body.author
// 	})
// 	.save()
// 	.then(newQuote => {
// 		res.send(newQuote);
// 	});
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
