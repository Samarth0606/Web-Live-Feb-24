// import React from 'react'

// function Person({name , age}) {
//     let newName = name;
//     function handleLogout(){
//         console.log(newName , 'before')
//         newName = "anonymous";
//         console.log(newName , 'after')
//     }

//   return (
//     <div>
//         <h1>Naam: {newName} </h1>
//         <h1>Age: {age} </h1>
//         <button onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Person

// --------------------------------

import React, { useState } from 'react'

function Person({name , age}) {
    let [username , setUsername] = useState(name);
    function handleLogout(){
        console.log(username ,'before')
        setUsername("anonymous") //async task -> last perform
        console.log(username , 'after')
    }

  return (
    <div>
        <h1>Naam: {username} </h1>
        <h1>Age: {age} </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Person
