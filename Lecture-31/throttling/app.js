// let inpEl = document.querySelector('input')
// let spanEl = document.querySelector('span')

// let callApi = (e)=>{
//     console.log(e.target.value)
// }


// inpEl.addEventListener('input' , callApi)

// ------------------------------
//part-2

// let inpEl = document.querySelector('input')
// let spanEl = document.querySelector('span')

// let callApi = (e)=>{
//     console.log(e.target.value)
// }

// // 2 args -> return a fn
// function throttle(fn  , wait=1000){
//     return ()=>{
//         setTimeout(()=>{
//             fn()
//         } , wait)
//     }
// }

// inpEl.addEventListener('input' , callApi)

// -------------------------------

// // ------------------------------
// //part-3

// let inpEl = document.querySelector('input')
// let spanEl = document.querySelector('span')

// let callApi = (e)=>{
//     console.log(e.target.value)
// }

// // 2 args -> return a fn
// function throttle(fn  , wait=1000){
//     return ()=>{
//         setTimeout(()=>{
//             fn()
//         } , wait)
//     }
// }

// inpEl.addEventListener('input' , callApi)
// // ------------------
// const updateNumber = ()=>{
//    spanEl.innerText = ++spanEl.innerText
// }

// document.addEventListener('mousemove' , updateNumber)


// ------------------------------
//part-4

let inpEl = document.querySelector('input')
let spanEl = document.querySelector('span')

let callApi = (e)=>{
    console.log(e.target.value)
}

const updateNumber = throttle(()=>{
    spanEl.innerText = ++spanEl.innerText
 } , 1000)
 
// 2 args -> return a fn
function throttle(fn  , wait=2000){
    let timerId = null;
    return (e)=>{
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn(e)
        } , wait)
    }
}

inpEl.addEventListener('input' , throttle(callApi , 2000))



document.addEventListener('mousemove' , updateNumber)