const express = require('express');
const app = express();

app.set('view esngine' , 'ejs'); //hbs , pug , nunjucks , ejs


app.get('/about' , (req,res)=>{
    // res.send() //data => string -> html
    res.render('about') //new page show/display
})
app.get('/home' , (req,res)=>{
    res.render('sam/home')
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})
