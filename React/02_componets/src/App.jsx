import React from 'react'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card.jsx'

const App = () => {
  return (
    <div>
      {/* <div className="card">
        <h1>Vishal</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div> */}
      
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
    
  )
}


export default App