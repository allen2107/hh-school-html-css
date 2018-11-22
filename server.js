var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/*.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/styles/styles.css'));
});

app.get('/*.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/images/letter.png'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.listen(8080);
