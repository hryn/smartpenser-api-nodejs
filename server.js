var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    moment = require('moment'),
    controller = require('./controllers');

    
function d2(n) {
    if(n<9) return "0"+n;
    return n;
}

app.set('json replacer', function (key, value) {
    if (this[key] instanceof Date) {
        d = this[key];
        value = d.getFullYear() + "-" + d2(parseInt(d.getMonth()+1)) + "-" + d2(d.getDate()) + " " + d2(d.getHours()) + ":" + d2(d.getMinutes()) + ":" + d2(d.getSeconds()); 
    }
    return value;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);

console.log('Server started on: ' + port);