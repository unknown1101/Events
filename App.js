var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/privacy', function(req, res) {
    res.sendFile(path.join(__dirname , '/PrivacyPolicy.html'));
});

app.listen(process.env.PORT ||8080);
