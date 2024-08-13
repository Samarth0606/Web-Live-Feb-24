const mongoose = require('mongoose');

let QuoteSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
})

let Quotes = mongoose.model('Quote' , QuoteSchema)
module.exports = Quotes;
