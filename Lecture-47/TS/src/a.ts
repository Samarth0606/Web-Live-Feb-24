// let a = 10;
// console.log(a);

// a = "sam"; ❌
// a = 100; ✅

// console.log(a)

// apne aap samajh lia => inference (v. imp)

// -----------------------------------------
//ts -> typescript / type safety
// let a:number = 10;
// let b:string = "sam";
// let c = true //inference ✅

// -----------------------------------------
// tuples -> []restricted

// let tup:[number,number,string,string] = [12,"sam",12,"vohra"]; ❌
// let tup:[number,number,string,string] = [12,12,"sam","vohra"]; 
// console.log(tup)

// ------------------------------------------

// function sum(a:number,b:number){ //inference
//     return a+b;
// }
// sum(10,30)

// --------------

//return type
// function sum(a:number,b:number):number{
//     return a+b;
// }
// let ans = sum(10,30)

// ----------------
// eg: age -> 18+ true / 18- false

// function age(a:number):boolean{
//     if(a>=18){
//         return true
//     }else{
//         return false
//     }
// }

// age(19)

// -----------------------------

//fn can be sent as an argument
// function a( fn : ()=>number):number{
//     console.log("i am a");
//     fn();
//     return 10
// }

// function b(){
//     console.log("hello from b");
//     return 10
// }
// a(b)


// ------------------------------

// let arr = ()=>{
//     console.log("hi i am arrow")
// }

function sam(a){
    console.log(a)
}
sam(10)


