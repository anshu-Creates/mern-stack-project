import React from 'react'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Reviews from './components/Reviews/Reviews'
import About from './components/About/About'
import Features from './components/Features/Features'

const App = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Reviews/>
      <About />
      <Features/>
    </div>
  )
}

export default App