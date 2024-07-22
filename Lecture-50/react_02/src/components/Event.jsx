import React from 'react'

function Event() {
    // statement ki duniya
    function handleClick(){
        console.log("hello")
    }
    function handleClick2(b){
        console.log("hello 2" + b)
    }

  return (
    <div>
        <button onClick={handleClick} >DABAIYE NA!!</button>
        <button onClick={()=> handleClick2(10)} >DABAIYE NA 2!!</button>
    </div>
  )
}

export default Event