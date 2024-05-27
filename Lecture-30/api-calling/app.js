


// 1. 

// let req = new XMLHttpRequest();
// // console.log(req , '1')

// // establish a connection
// req.open("GET" , "https://api.tvmaze.com/search/shows?q=girls" )
// //actually asking for data
// req.send();

// // console.log(req , '2')

// req.onload = function(){
//     console.log(this , 'load')
// }
// req.onerror = function(){
//     console.log(this , 'error')
// }

// ------------------------------

//2. fetch -> web api -> browser -> return a Promise

// by default -> get

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(data){
//     console.log(data , 'data') //metadata -> incomplete data -> partial data
//     return data.json() //returns a promise -> saare data aane ka wait krta hai
// })
// .then(function(finalData){
//     console.log(finalData) //complete data now
// })
// .catch(function(err){
//     console.log(err , 'err')
// })


// ---------------------------------------------------

//3. axios -> 3rd library -> return a Promise


// axios.get('https://api.tvmaze.com/search/shows?q=girls') //promise
// .then(function(d){
//     // console.log(d , "data") 
//     console.log(d.data , "data") //entire data
// })
// .catch(function(err){
//     console.log(err , "err")
// })