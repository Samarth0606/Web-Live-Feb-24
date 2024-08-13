import React, { Fragment } from 'react'
import MainNavigation from './components/mainNavigation/mainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import NewQoute from './components/pages/NewQoute'
import ShowQuote from './components/pages/ShowQuote'

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path='/' element={ <AllQuotes /> } />
        <Route path='/new' element={ <NewQoute /> } />
        <Route path='/quotes/:id' element={ <ShowQuote /> } />
      </Routes>
    </Fragment>
  )
}

export default App