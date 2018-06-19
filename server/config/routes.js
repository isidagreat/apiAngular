module.exports = function(app){ 
    const routes = require('../controllers/bases.js')
    app.get('/', function(req, res){
        routes.index(req, res)
    });
}