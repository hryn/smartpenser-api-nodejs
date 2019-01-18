'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'message': 'Success',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.err = function(values, res) {
    var data = {
        'status': 400,
        'message': 'Error',
        'data': values
    };
    res.status(400);
    res.json(data);
    res.end();
  };