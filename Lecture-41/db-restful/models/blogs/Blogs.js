const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        trim:true,
        required:true
    }
})
// model is dependant on schema
// collection/model is a js class -> capital & singular
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog; //model




