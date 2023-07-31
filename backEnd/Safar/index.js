// const http = require('http');
// const port = process.env.PORT || 8000;

// const requestHandler = function(req, res){
//     return res.end('<h1>Safar</h1>');
// }

// const server = http.createServer(requestHandler);

// server.listen(port, function(err){
//     if(err){
//         console.log('Error:', err);
//     }
//     console.log('Server is running on port: ', port);
// })

// require db and schema
const db = require('./config/mongoose');
const Safar = require('./models/safarSchema');


// require express
const express = require('express');

//initialise express
const app = express();

//define port
const port = process.env.PORT || 8000;

// // request handler
// app.get('/', function(req, res){
//     return res.send('<h1>SAFAR</h1>');
// })

// use express router
app.use('/', require('./routes/index'));

// set the view engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

// to set the property
app.use(express.static('static'));

// to extract the user-data/body of the request we use a middleware called body-praser
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }))

// listening to port for changes
app.listen(port, function(err){
    if(err){
        console.log('Error:', err);
    }
    console.log('Server is running on port:', port);
})