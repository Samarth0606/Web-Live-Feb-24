import React from 'react'
import Cat from './components/Cat'
import Random from './components/Random'
import Event from './components/Event'
import Prop from './components/Prop'
import Person from './components/Person'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <div>App</div>
      {/* calling sort of */}
      {/* <Cat /> */}
      {/* <Random /> */}
      {/* <Event /> */}
      {/* <Prop name="samarth" age="20" /> */}
      {/* <Person name="samarth" age="20" /> */}
      <Counter />
    </div>
  )
}

export default App