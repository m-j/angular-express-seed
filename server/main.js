var express = require('express');
var path = require('path')
var folderLoader = require('./utils/folderLoader')

var staticPath = 'client';

if(process.argv[2]){
    staticPath = process.argv[2];
}

var serveStatic = require('serve-static')
var app = express();

app.use(serveStatic(staticPath));

var controllers = folderLoader.load(path.join(__dirname, 'controllers'))

controllers.forEach(function(controller){
    controller.apply(app)
})

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

