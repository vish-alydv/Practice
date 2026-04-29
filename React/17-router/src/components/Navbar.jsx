import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='nav'> 
        <h3>Vishal</h3>
        <div>
          <Link to='/'>Home</Link>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar