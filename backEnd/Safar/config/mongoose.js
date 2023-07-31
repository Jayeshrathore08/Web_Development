const mongoose = require('mongoose');

// create database 
mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true})
  
  .then(() => console.log('connected successfully'))
  
  .catch((err) => {console.error(err);});


// connect to database using 
const db = mongoose.connection;

// handle error on connecting to database 
db.on('error', console.error.bind
(console, "Error connecting to MongoDB"));

// once connected console using 
db.once('open', function(){
    console.log('Connected to db');
})

// export the module to use it in other files
module.exports = db;



