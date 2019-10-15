var db = require('../dbconfig');
var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
  text: String,
  author: String,
});

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;