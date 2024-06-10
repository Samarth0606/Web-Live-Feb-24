
//  module -> package -> install ❌ -> directly require ✅
const { error } = require('console');
let fs = require('fs'); //nodejs

// CRUD
// CREATE -> writeFile()

// let data = "my name is samarth vohra"

// // fs.writeFile('abc.txt' , data , {} , ()=>{})

// fs.writeFile('abc.txt' , data , {
//     encoding: 'utf-8',
//     flag: 'w'
// } , (err)=>{
//     if(err){throw err}
//     console.log("file written successfully")
// })


// -------

// let data = "my name is samarth"


// fs.writeFile('def.txt' , data , {} , (err)=>{
//     if(err){throw err}
//     console.log("file written successfully")
// })

// -------------------
// READ -> readFile()
// fs.readFile('def.txt' , {} , ()=>{})

// fs.readFile('abc.txt' , {
//     encoding: "utf-8",
//     flag: "r"
// } , 
// (err , data)=>{
//     if(err){throw err}
//     console.log(data)
// })

// --------
//output -> encoding ✅ , toString()
// fs.readFile('abc.txt' , {} , 
// (err , data)=>{
//     if(err){throw err}
//     console.log(data.toString()) //2nd way 
// })


// -------------------
// UPDATE -> appendFile()

// let append = "hello i am from delhi"

// fs.appendFile('abc.txt' , "hello i am from delhi" , (err)=>{
//     if(err){throw error}
//     console.log("data changed successfully")
// } )


// // -------------------
// // DELETE -> unlink()
// fs.unlink('abc.txt' , (err)=>{
//     if(err){throw err}
//     console.log("file deleted successfully")
// })