// import React from 'react'

// function Prop(props) {
//     console.log(props , "props hai ye")
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <h1>{props.age}</h1>
//     </div>
//   )
// }

// export default Prop

// ----------------------------

import React from 'react'

function Prop({name , age}) {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Prop