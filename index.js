const express = require('express');
const dotenv = require('dotenv').config();
const ejs = require('ejs');
const hostname = process.env.HOSTNAME;
const port = 3000;



const app = express();




//const routes = require('./routes/routes');
//app.use(routes);


app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/' , function(req, res) {
    res.render('index.ejs');
});



app.listen(process.env.PORT || port, function() {
    console.log('Node server is running on port ' + port + '...');
});