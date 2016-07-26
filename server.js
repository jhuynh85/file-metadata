var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

var port = process.env.PORT || 8080;

app.post('/get-file-size', upload.single('file'), function(req, res){
    res.send({'size': req.file.size});
});

// Serve default page
app.get('/*', function(req, res){
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port);