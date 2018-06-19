var mongoose = require('mongoose');
const connecection = mongoose.connect('mongodb://localhost/bases');
module.exports =  connecection;