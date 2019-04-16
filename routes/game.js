'use strict';

module.exports = function(app){
    var gameController = require('../controllers/gameController');
    app.route('/vault-game-api/v1/game')
        .get(gameController.gameFunc)
};
