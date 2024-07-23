// import React, { useState } from 'react'

// function Interview() {
//     let [count , setCount] = useState(0);
//     // batching
//     function handleClick(){
//         setCount(count+1) // async -> baad mei (0+1) //1
//         setCount(count+1) // async -> baad mei (0+1) //1
//         setCount(count+1) // async -> baad mei (0+1) //1
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>Click</button>
//             <h1>COUNTER: {count}</h1>
//         </div>
//     )
// }

// export default Interview

// ------------------------------

import React, { useState } from 'react'

function Interview() {
    let [count , setCount] = useState(0);
    // batching -> 1 rerender only
    function handleClick(){
        setCount((count)=>count+1) //previous chnage ka hold rakhta hai in cb fn
        setCount((count)=>count+1)
        console.log(count)
        setCount(count+1)
        console.log(count)
        setCount((count)=>count+1) 
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <h1>COUNTER: {count}</h1>
        </div>
    )
}

export default Interview