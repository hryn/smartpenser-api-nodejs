var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bobo_local",
  password: "#Bobobox1234",
  database: "smartpenser"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;