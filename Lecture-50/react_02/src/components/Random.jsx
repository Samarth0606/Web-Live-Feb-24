// import React from 'react'

// function Random() {
// // statement ki duniya
// let RN = Math.floor(Math.random()*10);
// let el;
// if(RN === 7){
//     el = <h1>Jeet gye thala for a reason - {RN}</h1>
// }else{
//     el = <h1>Better luck next time - {RN}</h1>
// }

// // expression ki duniya
//   return (
//     <div>Random: {el}</div>
//   )
// }

// export default Random

// -----------------------------

import React from 'react'

function Random() {
  return (
    <div>
        {/* ternary operator */}
    {
    Math.floor(Math.random()*10) === 7 ? <h1>WINNER</h1> : <h1>LOOSER</h1> 
    }
    </div>
  )
}

export default Random








