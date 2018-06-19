// setup bcrypt
const bcrypt = require('bcrypt-as-promised');

    User= require('../models/base.js')
module.exports = {
    index: function (req , res){

      return res.sendFile(["index"]);
}
}