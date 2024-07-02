const mongoose = require('mongoose');

//schema define => blueprint of collection kaise dikhega
const sportSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    year:{
        type: Number,
        min: 0,
        required: true
    },
    isPlayed: {
        type: Boolean,
        default: false,
        required: true
    },
    description:{
        type: String,
        trim: true
    }

})

//model define => singular , Capital
const Sport = mongoose.model('Sport' , sportSchema)
//vs code mei naam       db mei naam     iski madad se

module.exports = Sport;

