import React, { memo, useState } from 'react'

// function MyMemo({name}){
//     return(
//         <div>
//             <h1>Naam:{name} </h1>
//         </div>
//     )
// }

// --------

// memo fn
// let MyMemo = memo()
let MyMemo = memo(function({name}){
    return(
        <div>
            <h1>Naam:{name} </h1>
        </div>
    )
})

function Memoo() {
    let [title , setTitle] = useState("sammy boi")
    function handleclick(){
        setTitle(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <MyMemo name={title} />
        <button onClick={handleclick}>Change above</button>
        <MyMemo name="lolipop 2" />
        <MyMemo name="lolipop 3" />
        <MyMemo name="lolipop 4" />
    </div>
  )
}

export default Memoo