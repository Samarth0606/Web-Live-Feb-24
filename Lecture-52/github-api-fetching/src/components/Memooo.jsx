import React, { useMemo, useState } from 'react'

function Memooo() {
    let [count ,setCount] = useState(0)
    let [inp ,setInp] = useState(0)
    function handleInp(e){
        setInp(e.target.value)
    }

    let mymemo = useMemo(()=>{
        let ans=0;
        for(let i=0;i<=inp;i++){
            ans+=i;
            console.log("mai chal gya")
        }
        return ans
    } , [inp])


  return (
    <div>
        <input onChange={handleInp} type="number" value={inp} />
        <h1>Sum - {mymemo}</h1>
        <button onClick={()=> setCount(count+1)}>Counter - {count} </button>
    </div>
  )
}

export default Memooo