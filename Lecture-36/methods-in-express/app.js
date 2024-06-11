// const express = require('express');
// const app = express();


// // app.use('' , function(){})  //middleware syntax
// // app.use('/cat' , function(){
// //     console.log("catty")
// // })

// // app.use(function(){
// //     console.log("sammy")
// // })

// app.get('/cat' , (req,res)=>{
//     // console.log(req) //object
//     // console.log(res) //object

// })

// let PORT = 8080;
// app.listen(PORT , ()=>{
//     console.log(`Server conncetd at port : ${PORT}`)
// })


// --------------------------------



// const express = require('express');
// const app = express();

// // middleware
// app.use('/cat' , function(req,res,next){
//     console.log("meeoww");
//     // res.send("middleware")
//     next(); //next fn par bhejdo
// })

// // get
// app.get('/cat' , function(req,res){
//     console.log("billi");
//     // res.send('<h1>get</h1>')
// })


// let PORT = 8080;
// app.listen(PORT , ()=>{
//     console.log(`Server conncetd at port : ${PORT}`)
// })

// // -----------------------

// const express = require('express');
// const app = express();

// // middleware
// app.use('/cat' , function(req,res,next){
//     console.log("meeoww");
//     // res.send("middleware")
//     next(); //next fn par bhejdo
// })

// // get
// app.get('/cat/dog' , function(req,res){
//     console.log("billi + kutta");
//     res.send('<h1>get 2</h1>')
// })

// let PORT = 8080;
// app.listen(PORT , ()=>{
//     console.log(`Server conncetd at port : ${PORT}`)
// })

// -----------------------

const express = require('express');
const app = express();


app.use('/cat' , function(req,res,next){
    console.log("meeoww");
    next(); 
})
app.get('/cat/dog' , function(req,res){
    console.log("billi + kutta");
    res.send('<h1>get 2</h1>')
})

app.get('*' , function(req,res){
    console.log("lol");
    res.send('<h1>lol</h1>')
})


let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server conncetd at port : ${PORT}`)
})