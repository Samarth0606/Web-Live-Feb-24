const express = require('express');
const app = express();


// ---wrong way---
// app.get('/sam/cat' , (req,res)=>{
//     res.send("tic tac toe cat")
// })
// app.get('/sam/dog' , (req,res)=>{
//     res.send("tic tac toe dog")
// })

// -> /////right way//////

//path parameters
// app.get('/sam/:anything' , (req,res)=>{
//     console.log(req.params)
//     res.send(req.params) 
// })
app.set('view engine' , 'ejs');

// query parameter
app.get('/seeform' , (req,res)=>{
    res.render('index')
})
app.get('/form/:id' , (req,res)=>{
    console.log(req.query)
    console.log(req.params)
    console.log(req.url)
    res.send({a:req.query , b:req.params , c:req.url})
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})
