// ==========EXPRESS==============
var express = require('express');
var app = express();
// ==========Mongoose=============
require('./server/config/mongoose');
// =========BodyParser============
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// =========StaticPAth============
var path = require('path');
app.use(express.static(path.join(__dirname, '/public/dist/public')));
// ==========ExpressSession======
const session = require('express-session');
app.set('trust proxy', 1)
app.use(session({
    secret:"UltimateSmash",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}));
// =========Include Routes========
require('./server/config/routes.js')(app);
// =====Set Server to listen======
app.listen(8000), function(){
    console.log('Listening on port 8000')
}
