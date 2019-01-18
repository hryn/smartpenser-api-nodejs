'use strict';

module.exports = function(app) {
    var controller = require('./controllers');

    app.route('/')
        .get(controller.index);

    app.route('/drinks')
        .get(controller.drinks);

    app.route('/drinks/:user_id')
        .get(controller.findDrinkByUserID);

    app.route('/drinks')
        .post(controller.createDrink);
    
    app.route('/drinks')
        .delete(controller.deleteDrink);

    app.route('/users/:rfid')
        .get(controller.findUserByRfid);

    
};