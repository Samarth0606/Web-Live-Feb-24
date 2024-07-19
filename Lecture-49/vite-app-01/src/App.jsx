

// comnponent -> functions -> call (compoents are also sort of called)


// --------------------------

// types -> 2 :
//  class based -> dynamic components -> dynamic changes ✅ -> use ❌

// function based -> static compoents -> dynamic changes ❌ -> use ✅
// hooks -> predefined functions + FC -> dynamic changes ✅

// --------------------------

// import export (es6)

import Dummy from "./components/Dummy";
import Person , { Mummy , Papa } from "./components/Person";
// import sam from "./components/sam"; ❌

//component -> App
function App(){
  return(
    <div>

      {/* self closing tag */}
      <Person />
      <Mummy />
      <Papa />
      {/* <sam /> ❌ */}
      <Dummy />

      <h1>hello from react</h1>
    </div>
  )
}

export default App;












