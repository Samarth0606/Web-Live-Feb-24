

// let arr1 = [10,20,30,40]
// let arr2 = [50,60,70]


// let ans = arr1.concat(arr2)
// console.log(ans)

// // -------------------------
// //modern way -> spread operator => failana

// // let nums = [...arr1 , 50 , 60 , 70];

// let nums = [...arr1 , ...arr2] //=> [10,20,30,40,50,60,70]
// console.log(nums)
// // array?  ✅
// // objects? ✅

// // --------------------

// let obj1 = {
//     a:10,
//     b:20
// }
// let obj2 = {
//     c:30,
//     d:40
// }
// let obj3 = {
//     ...obj1,
//     ...obj2
// }

// console.log(obj3)

// ------------------------------

// destructuring
// Array  ✅
// object ✅


// let arr = ['grapes' , 'apple' , 'mango' , 'lichi' , 'orange' , 'pipeapple' , 'guava']

// console.log(arr[1] , arr[4]);
// // modern way => destructure karo

// let [fru1 , f2 , f3 , f4 , fun5 , f6 , f7] = arr;

// console.log(fru1 , f2 , f3 , f4 , fun5 , f6 , f7);

// ----

// let arr = [10,20 , 30];
// let [f1 , f2 , f3="sam", f4] = arr;

// console.log(f1,f2,f3)
// console.log(f1,f2,f3,f4) //undefined

// -----------------------------


// let obj = {
//     naam : "bm-babloo",
//     price: 150 , 
//     rang :  "chitta",
//     wheels: 5
// }

// // let [] = arr; //array
// // let {f1 , f2 , f3} = obj; //object ❌
// // console.log(f1 , f2 , f3)

// // let {naam , price , rang} = obj; //object ✅
// // console.log(naam , price , rang)

// // -----

// let {naam , price , rang , wheels=4} = obj
// console.log(naam , price , rang , wheels)


// ---------------------

// rest parameter

// function sam(x,y,z, ...num){
//     console.log(arguments)
//     console.log(num)
//     return x+y+z
// }
// console.log(sam(2,3,4,5,6,7,8,9))

// ------

// function sam(x , ...num){
//     console.log(arguments)
//     console.log(num)
//     console.log(x)
// }

// sam(10,20,30)