// import React, { useEffect } from 'react'

// function Reff() {
//     let marks = 95;

//     useEffect(function(){
//         setTimeout(function(){
//             //span badalna
//             document.getElementsByTagName('span')[0].innerHTML = '33'
//         } , 5000)
//     } , [])

//   return (
//     <div>
//         <h1>Maths Marks: <span>{marks}</span>  </h1>
//     </div>
//   )
// }

// export default Reff

// ------------------------------------------
//usecase-1
// import React, { useEffect, useRef, useState } from 'react'

// function Reff() {
//     let [marks,setMarks] = useState(95);
//     let spanEl = useRef();

//     useEffect(function(){
//         setTimeout(function(){
//             //span badalna
//             spanEl.current.innerText = 33;
//         } , 5000)
//     } , [])
    
//   return (
//     <div>
//         <h1>Maths Marks: <span ref={spanEl}>{marks}</span>  </h1>
//     </div>
//   )
// }

// export default Reff

// ------------------------------------------
//usecase-2
import React, { useRef, useState } from 'react'

function Reff() {
    let [count , setCount] = useState(0) //rerender ✅ -> (render ke baad)
    let countRef = useRef(0); //rerender ❌ -> r1 = 5 click =>  r2
   function handleClick(){
    //  setCount(count+1)
    countRef.current ++ ;  //5
    console.log(countRef.current)
   }
   function handleClick2(){
    setCount(count+1) //rerender
   }
    
  return (
    <div>
        {/* <h1>{countRef.current}</h1> */}
        <button onClick={handleClick}>Increment - {countRef.current}</button>
        <button onClick={handleClick2}>Increment - {count}</button>
    </div>
  )
}

export default Reff