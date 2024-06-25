const express = require('express');
const app = express(); //instance of application
const path = require('path'); //nodejs
const mongoose = require('mongoose');
const Blog = require('./models/blogs/Blogs'); //require model of BLOG


app.set('views' , path.join(__dirname , 'views')); //templates
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); //static


// connect returns a promise
mongoose.connect('mongodb://127.0.0.1:27017/web-live-feb')
.then(()=>{console.log("DB CONNECTED SUCCESSFULLY")})
.catch((err)=>{console.log(err , "DB refused to connect")})

// RESTFUL CRUD

// read
app.get('/blogs' , async(req,res)=>{
    let allBlogs = await Blog.find({}); //finding from DB => all return a a promise
    console.log(allBlogs , 'allBlogs')
    res.render('blogs/index')
})

app.listen(8080 , ()=>{
    console.log(`server connected at port 8080`)
})