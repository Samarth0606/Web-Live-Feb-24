import React, { useState } from 'react'

function Counter() {

    let [counter , setCounter] = useState(0)
    function handleInc(){
        setCounter(counter+1)
    }

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleInc}>+</button>
    </div>
  )
}

export default Counter