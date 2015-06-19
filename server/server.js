var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000 );

app.use('/js',         express.static( path.join(__dirname, '../client/js') ));
app.use('/components', express.static( path.join(__dirname, '../client/components') ));
app.use('/css',        express.static( path.join(__dirname, '../client/css') ));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen( app.get('port') , function() {
    console.log('Running on port' + app.get('port'));
});