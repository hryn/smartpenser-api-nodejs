'use strict';

var response = require('./helpers/response');
var connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Hello! Oke~", res)
};

exports.drinks = function(req, res) {
    connection.query('SELECT * FROM drinks', function (error, rows, fields){
        if(error){
            response.err(error);
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findDrinkByUserID = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM drinks where user_id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            response.err(error);
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findDrinkByUserID = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM drinks where user_id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            response.err(error);
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createDrink = function(req, res) {
    
    var user_id = req.body.user_id;
    var milis = req.body.milis;

    connection.query('INSERT INTO drinks (user_id, milis) values (?,?)',
    [ user_id, milis ], 
    function (error, rows, fields){
        if(error){
            response.err(error);
        } else{
            response.ok("Berhasil menambahkan data!", res)
        }
    });
};

exports.deleteDrink = function(req, res) {
    
    var user_id = req.body.user_id;

    connection.query('DELETE FROM drinks WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            response.err(error);
        } else{
            response.ok("Berhasil menghapus data!", res)
        }
    });
};

exports.findUserByRfid = function(req, res) {
    
    var rfid = req.params.rfid;

    connection.query('SELECT * FROM users where rfid = ?',
    [ rfid ], 
    function (error, rows, fields){
        if(error || rows.length == 0){
            response.err(rows, res);
        } else{
            response.ok(rows, res)
        }
    });
};