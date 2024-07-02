const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

//mongoose -> ODM -> js to json && json to js convert , queries likhne mei help krta hai.
//mongoose return ``Promise``
mongoose.connect('mongodb://127.0.0.1:27017/sports-club') //db name
.then(()=>{console.log('DATABASE CONNECTED')})
.catch((err)=>{console.log(err , 'ERR')})


app.set('view engine' , 'ejs'); // view engine 
app.set('views' , path.join(__dirname , 'views')); //views folder
app.use(express.static(path.join(__dirname , 'public'))) //static folders


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`)
})