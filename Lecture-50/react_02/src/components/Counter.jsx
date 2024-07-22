import React, { useState } from 'react'

function Counter() {

    let [count , setCount] = useState(0)
    function handleMinus(){
        setCount(count-1)
    }
    function handlePlus(){
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={handleMinus}>-</button>
        &nbsp;
        Count: {count}
        &nbsp;
        <button onClick={handlePlus}>+</button>

    </div>
  )
}

export default Counter