import React, { useState } from 'react'


function Head(props){
    return <h1>name:{props.name}</h1>
}
function BadaHead(props){
    let [namee , setNamee] = useState(props.name)
    function handleCLICK(){
        setNamee(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <button onClick={handleCLICK}>Chnage</button>
            <Head name={namee} />
        </div>
    )
}

function Sam() {
  return (
    <div>
        <BadaHead name="mayank" />
        <Head name="samarth" />
    </div>
  )
}

export default Sam