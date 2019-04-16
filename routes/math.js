'use strict';

module.exports = function(app){
    var mathController = require('../controllers/mathController');
    app.route('/vault-math-api/v1/math')
        .get(mathController.mathFunc)
};
