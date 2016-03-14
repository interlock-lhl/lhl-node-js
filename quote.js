var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100/quotes');

var Quote = mongoose.model('Quote',
  {
    quote: { type: String, required: true, minlength: 10},
    submitter: { type: String, required: true, minLength: 3},
    updated: { type: Date, default: Date.now },
  }
);

module.exports = Quote;
