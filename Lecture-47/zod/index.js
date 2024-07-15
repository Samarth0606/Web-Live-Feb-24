const express = require('express');
const app = express();
const zod = require('zod');

//data bheje => array of string (compulsion)

let schema = zod.array(zod.string());

// body parsing middleware
app.use(express.json());

//post
app.post('/cricket' , (req,res)=>{
    let winners = req.body.winner;
    let response = schema.safeParse(winners);
    if(!response.success){
        return res.status(411).json({msg:"invalid data"})
    }else{
        res.status(200).send(response.data)
    }
})

let schemca2 = zod.object({
    email:  zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal('IN').or(zod.literal('US'))
})

//post
app.post('/auth' , (req,res)=>{
    let details = req.body.detail;
    let response = schemca2.safeParse(details);
    if(!response.success){
        return res.status(411).json({msg:"invalid data"})
    }else{
        res.status(200).send(response.data)
    }
})



app.listen(8080 , ()=>{
    console.log('server connected at port 8080');
})









