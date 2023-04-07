const express = require('express');
const dotenv = require('dotenv').config();
const ejs = require('ejs');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;



const app = express();




//const routes = require('./routes/routes');
//app.use(routes);


app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/' , function(req, res) {
    res.render('index.ejs');
});



app.listen(port, hostname, ()=> {
	console.log(`Server is now running at http://localhost:${port}`);
});