


// function sam(a:number,b:string):string{
//     return a+b;
// }
// sam(10,'sam')


// function sam(lol:()=>string):void{
//     console.log("sam");
//     lol()
// }
// function lol(){
//     return 'lol'
// }
// sam(lol)

// --------------------------

//
// let user = {
//     firstName:'sam',
//     lastName:"vohra",
//     email:'sam@gmail.com',
//     isMale:true,
//     age:20
// }

// // function islegal(user:{}){
// function islegal( user:{
//     firstName:string,
//     lastName:string,
//     email:string,
//     isMale:boolean,
//     age:number
// } ){
//     if(user.age>=18){
//         return true
//     }else{
//         return false
//     }
// }
// islegal(user)

// --------------------------------

//interface => 1. object

// interface User{
//     firstName:string,
//     lastName:string,
//     email:string,
//     isMale?:boolean,
//     age:number
// }
// function islegal( user:User){
//     if(user.age>=18){
//         return true
//     }else{
//         return false
//     }
// }
// let user = {
//     firstName:'sam',
//     lastName:"vohra",
//     email:"sam@gmail.com",
//     age:20
// }
// islegal(user)


// --------------------------------

//interface => 2. classes

// interface X{
//     name:string,
//     age:number,
// }
// interface Y extends X{
//     greet(phrase:string):void
// }
// // class Person extends Student{}
// class Student implements Y {
//     name:string;
//     age:number;
//     constructor(naam:string,umar:number){
//         this.name = naam;
//         this.age = umar;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`)
//     }
// }
// let s1 = new Student('sam' , 12)
// s1.greet('namaste');

// ------------------------------------------

//types vs interface

// interface X{
//     a:string
// }

// interface Y {
//     b:number
// }
// interface Z extends X,Y{}

// let obj:Z = {
//     a: "sam",
//     b: 10
// }

//interfaces can be extended
// -------------------------------
//types cannot be extended (extends)
//union ( or => | ) , intersection ( and => & ) ✅

// type X = {
//     a:string
// }

// //intersection
// type Y = X & {
//     b:number
// }


// let obj:Y = {
//     a: "sam",
//     b: 10
// }

// -------------------------

// interface X{
//     a:string
// }

// type Y = X & {
//     b:number
// }


// let obj:Y = {
//     a: "sam",
//     b: 10
// }

// ---------------

// type X = {
//     a:string
// }

// interface Y extends X{
//     b:number
// }


// let obj:Y = {
//     a: "sam",
//     b: 10
// }


// -------------------------------
//min obj property
// interface X{
//     a:string
// }
//directly
// type Y = string;


// interface mei u cannot use union
// extends = &(intersection) (KARDETA HAI)
// union ❌

// type Z = number | string;
// function sam(a:Z){

// }
// sam(1)
// sam("1")

// -------------------------------
// interface obj/class

// type X = {
//     name:string,
//     age:number,
// }
// type Y = X & { 
//     greet(phrase:string):void
// }
// class Student implements Y {
//     name:string;
//     age:number;
//     constructor(naam:string,umar:number){
//         this.name = naam;
//         this.age = umar;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`)
//     }
// }
// let s1 = new Student('sam' , 12)
// s1.greet('namaste');


//class -> interface ✅
// --------------------------------------

// type DSA = {
//     teach : string,
//     leetcode : number
// }

// interface WEB{
//     teach : string,
//     project ?: number
// }

// type Samarth = DSA & WEB;

// let obj:Samarth = {
//     teach: "samarth vohra" ,
//     leetcode: 311 ,
//     project : 100
// }

// ----------------------------------------

//arrays
// let arr = [10,20,30];
// function maxi(arr : number[]){
//     let max = 0;
//     for(let item of arr){
//         if(item>=max){
//             max = item;
//         }
//     }
//     return max;
// }

// console.log(maxi(arr))

// ----------------------------------------

//array of object
// interface User{
//     name:string,
//     age:number
// }

// let users = [{name:"sam" , age:20}]

// function isLegal(users:User[]):void{
//     for(let item of users){
//         if(item.age > 18){
//             console.log(true)
//         }else{
//             console.log(false)
//         }
//     }
// }
// isLegal(users)

// -----------------------------------
// enums ?
//keywords on which we can iterate and those are constant values.
//=> allows me to define set of named constants
//game -> up down right left
//keypress -> type => string 

// function doSomething(keyPressed:string){
//     if(keyPressed === 'up'){
//         console.log("UP")
//     }else if(keyPressed === 'down'){
//         console.log("DOWN")
//     }
// }
// doSomething('up')
// doSomething('down')
// doSomething('chandigarh') //valid but wrong input

// ---------

// type Key = "up" | "down" | "left" | "right";

// function doSomething(keyPressed:Key){
//     if(keyPressed === 'up'){
//         console.log("UP")
//     }else if(keyPressed === 'down'){
//         console.log("DOWN")
//     }
// }
// doSomething('up')
// doSomething('down')
// doSomething('chandigarh') //err


// --------

// enum Direction{
//     up="up",
//     down="down",
//     right="right",
//     left="left"
// }
// enum Direction{
//     up=11,
//     down,
//     right,
//     left
// }

// function doSomething(keyPressed:Direction){
//     if(keyPressed === Direction.up){
//         console.log("UP")
//     }else if(keyPressed === Direction.down){
//         console.log("DOWN")
//     }
// }
// doSomething(Direction.up)
// doSomething(Direction.down)
// // doSomething(Direction.chandigarh) //err
// // ---
// console.log(Direction.up)
// console.log(Direction.down)


// ---------------
//REUSABLILITY , change at 1 place leads to change at all the places.

// enum Responses{
//     success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get('/' , (req,res)=>{
//     if(!req.userId){
//         res.status(Responses.NotFound).JSON({})
//     }
// })


// ------------------------------
// generics -> any datatype compile time par you can decide your datatype
// generics : recommend video zaroor dekhna 

// arr -> number | string

// type Input = string | number;
// let arr = ['sam', 'vohra'];

// function bada(arr:Input[]){
//    return arr[0]
// }
// let value = bada(arr)
// value.toUpperCase();

//typechecking error

// ---------------


// <T> fn call it with anything either number string boolean anything

function identity<T>(args:T[]):T{
    return args[0]
}

let out1 = identity<string>(["badmos" , "vohra"])
console.log(out1.toUpperCase())
let out2 = identity<number>([10 , 20])



//import -> type module (same as JS)