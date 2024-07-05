const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Sport = require('./models/Sport');

//mongoose -> ODM -> js to json && json to js convert , queries likhne mei help krta hai.
//mongoose return ``Promise``
mongoose.connect('mongodb://127.0.0.1:27017/sports-club') //db name
.then(()=>{console.log('DATABASE CONNECTED')})
.catch((err)=>{console.log(err , 'ERR')})


app.set('view engine' , 'ejs'); // view engine 
app.set('views' , path.join(__dirname , 'views')); //views folder
app.use(express.static(path.join(__dirname , 'public'))) //static folders
// app.use(express.json()) // json -> body parsing middleware
app.use(express.urlencoded({ extended: true })) //form-data 
app.use(methodOverride('_method'))

// READ
app.get('/sports' , async(req,res)=>{
    let allSports = await Sport.find();
    // res.render('index' , {allSports  : allSports} )
    res.render('index' , {allSports} )
})
// -----------------------------------------------
// CREATE
    //form
    app.get('/sport/new' , (req,res)=>{
        res.render('new') //file
    })

    //actually addding
    app.post('/sports' , async (req,res)=>{
        let { title , year , isPlayed , description } = req.body;
        let newSport = await Sport.create( { title , year , isPlayed , description })
        res.redirect('/sports') //path
    })

// -----------------------------------------------
// SHOW A PARTICULAR PRODUCT
app.get('/sports/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundSport = await Sport.findById(id);
    res.render('show' , {foundSport});
})

// -----------------------------------------------
// UPDATE
    // form for  updation
    app.get('/sports/:idd/edit' , async(req,res)=>{
        let {idd} = req.params;
        let foundSport = await Sport.findById(idd);
        res.render('edit' , {foundSport});
    })
    // actually changing the data
    app.patch('/sports/:idd' , async(req,res)=>{
        let {idd} = req.params;
        let {title , year , description} = req.body;
        // Sport.findByIdAndUpdate(idd , {title:title , year:year , description:description})
        await Sport.findByIdAndUpdate(idd , {title , year , description})
        res.redirect('/sports') //path get request bhejna
    })


// -----------------------------------------------
// DELETE
app.delete('/sports/:id' , async(req,res)=>{
    let {id} = req.params;
    await Sport.findByIdAndDelete(id);
    res.redirect('/sports') //path get request bhejna
})



const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`)
})