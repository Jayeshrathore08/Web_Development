const mongoose = require('mongoose');

// define schema
const safarSchema = new mongoose.Schema({
    username:{ type:String,required:true},

    location:{ type:String,required:true},

    image:{type:String,required:true},

    experience:{type:String,required:true},

    rating:{type:Number,required:true},

    places:{type:String,required:true},

    expenditure:{type:Number,required:true}
})

// connect or define the schema to the database
const Safar = mongoose.model('Safar', safarSchema);

// export the file to use across app
module.exports = Safar;