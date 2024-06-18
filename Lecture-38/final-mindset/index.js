const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public'))) //static files (public)


//body parsing middlewares
app.use(express.urlencoded({ extended: true })) //formdata => undef -> obj
app.use(express.json()) 

app.get('/sam' , (req,res)=>{
    res.render('index')
})

app.post('/sam' ,(req,res)=>{
    console.log(req.body); //i want json data
    res.send(req.body)
})

// future routes
// app.patch('/sam' ,(req,res)=>{})
// app.delete('/sam' ,(req,res)=>{})


let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`)
})