// Create MOngoose schemas
const mongoose = require('mongoose'),
basesSchema =new mongoose.Schema({
    email: String,
});
mongoose.Promise = global.Promise;
module.exports = mongoose.model('User', basesSchema);
