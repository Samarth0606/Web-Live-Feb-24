import React, { memo, useCallback, useState } from 'react'

function Callbacks() {
    let [counter , setCounter] = useState(0);
    // let a = 1;
    // let a = function(){
    //     console.log("hello ji")
    // }
    let a = useCallback(function(){
        console.log("hello ji")
    } , [])
    
  return (
    <div>
        <Demo b={a} />
        <button onClick={()=>setCounter(counter+1)}>click - {counter} </button>
    </div>
  )
}
let Demo = memo(function({b}){
    return (
        <div>
            hello - {b()}
        </div>
    )
})


export default Callbacks