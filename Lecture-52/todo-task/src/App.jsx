import React, { useState } from 'react'

function App() {

  let arr = [
    {
      title:"surya namaste",
      desc:"early morning kro"
    },
    {
      title:"shaam namaste",
      desc:"early morning kro"
    },
    {
      title:"raat namaste",
      desc:"early morning kro"
    }
  ]

  let [arrayy , setArrayy] = useState(arr);

  return (
    <div>
      <h1>TODO LIST</h1>
      <Todo todos={arrayy}  />
      <AddTodo arrayy={arrayy} setArrayy={setArrayy}  />
    </div>
  )
}

function AddTodo({arrayy , setArrayy}){
  let [inp1, setInp1] = useState("")
  let [inp2, setInp2] = useState("")
  function changeInp1(e){
    setInp1(e.target.value)
  }
  function changeInp2(e){
    setInp2(e.target.value)
  }
  function handleAdd(){
    setArrayy([...arrayy , {title:inp1 , desc:inp2}])
  }
  return(
    <div>
      <input onChange={changeInp1} type="text" value={inp1} />
      <input onChange={changeInp2} type="text" value={inp2} />
      <button onClick={handleAdd}>Add todo</button>
    </div>
  )
}

function Todo({todos}){
  return(
    todos.map((item , index)=>{
      return(
        <div key={index} style={{border:"2px solid black" , margin:"5px" }}>
          <h1>Title: {item.title} </h1>
          <h3>Description: {item.desc} </h3>
        </div>
      )
    })
  )
}

export default App