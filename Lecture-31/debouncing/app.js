

// let inpEl =  document.querySelector('input');


// let callFun1 = ()=>{
//     console.log("mai API hu chal gya")
// }

// inpEl.addEventListener('input' , callFun1)


// -------------------------------------------
// part-2

// let inpEl =  document.querySelector('input');


// let callFun1 = (e)=>{
//     console.log("mai API hu chal gya" , e.target.value)
// }

// // 2 argument
// let debounce = ( fn , wait)=>{

// }

// debounce(callFun1 , 2000)

// inpEl.addEventListener('input' , callFun1)

// -----------------------------------------------------

// part-3
// let inpEl =  document.querySelector('input');


// let callFun1 = (e)=>{
//     console.log("mai API hu chal gya" , e.target.value)
// }

// // 2 argument -> return fn
// let debounce = ( fn , wait)=>{
//     return ()=>{
//         fn();
//     }
// }

// let debouncedCallFun1 = debounce(callFun1 , 2000);
// console.log(debouncedCallFun1)

// inpEl.addEventListener('input' , callFun1)

// -----------------------------------------------------

// part-4
// let inpEl =  document.querySelector('input');


// let callFun1 = (e)=>{
//     console.log("mai API hu chal gya" , e.target.value)
// }

// // 2 argument -> return fn
// let debounce = ( fn , wait)=>{
//     return (e)=>{
//         fn(e);
//     }
// }

// let debouncedCallFun1 = debounce(callFun1 , 2000);
// console.log(debouncedCallFun1) //arrow fn

// // inpEl.addEventListener('input' , callFun1)
// inpEl.addEventListener('input' , debouncedCallFun1)



// -----------------------------------------------------

// part-5
// let inpEl =  document.querySelector('input');


// let callFun1 = (e)=>{
//     console.log("mai API hu chal gya" , e.target.value)
// }

// // 2 argument -> return fn
// let debounce = ( fn , wait)=>{
//     return (e)=>{
//         setTimeout(function(){
//             fn(e);
//         } , wait)
//     }
// }

// let debouncedCallFun1 = debounce(callFun1 , 2000);
// console.log(debouncedCallFun1) //arrow fn

// // inpEl.addEventListener('input' , callFun1)
// inpEl.addEventListener('input' , debouncedCallFun1)


// -----------------------------------------------------

// part-6
let inpEl =  document.querySelector('input');


let callFun1 = (e)=>{
    console.log("mai API hu chal gya" , e.target.value)
}

// 2 argument -> return fn
let debounce = ( fn , wait)=>{
    let timerId;
    return (e)=>{
        clearTimeout(timerId)
        timerId = setTimeout(function(){
            fn(e);
        } , wait)
    }
}

let debouncedCallFun1 = debounce(callFun1 , 2000);
console.log(debouncedCallFun1) //arrow fn

// inpEl.addEventListener('input' , callFun1)
inpEl.addEventListener('input' , debouncedCallFun1)

