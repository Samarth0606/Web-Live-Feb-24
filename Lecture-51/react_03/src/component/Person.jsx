import React, { Fragment, useState } from 'react'

function Person() {
    let [naam , setNaam] = useState("SAMMY BOI");

    function handleName(){
        setNaam(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <h1>Name: {naam}</h1>
        <button onClick={handleName}>change the name</button>
    </div>
  )
}

export default Person