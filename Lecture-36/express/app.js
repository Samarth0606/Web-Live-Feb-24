const express = require('express') //folder
// console.log(express) //fn
const app = express() //obj -> instance of your application
// console.log(app) 


app.listen(8080 , function(){
    console.log("server is running at port 8080")
})

// server kill -> cntr + c

