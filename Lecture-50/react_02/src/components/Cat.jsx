import React from 'react'

function Cat() {
    // statements
    let a = 10;
    let b = "sam";
    let c = false;
    let d = true;
    let e = "undefined";
    let f = null;

    let o = {a:10}
    let arr = [10,20,30]
    // expression
  return (
    <div>
        <h1> A - {a} </h1>
        <h1> B - {b} </h1>
        <h1> C - {JSON.stringify(c)} </h1>
        <h1> D - {JSON.stringify(d)} </h1>
        <h1> E - {JSON.stringify(e)} </h1>
        <h1> E - {e} </h1>
        <h1> F - {JSON.stringify(f)} </h1>
        <br />
        <h1> obj - {o.a} </h1>
        <h1> arr - {arr} </h1>
        <h1> arr - {arr[0]} </h1>
        <h1> arr - {arr['0']} </h1>
        {/* object.value / object.keys */}
    </div>
  )
}

export default Cat