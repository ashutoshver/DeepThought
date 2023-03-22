import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className='navbar'>
            <div className='logo'>
              <img src='https://www.deepthought.education/assets/images/logo/logo.svg' alt='deepthought'/>
            </div>
            <div className='icon'>
              <i className="fa-solid fa-house-chimney"></i>
              <i className="fa-solid fa-binoculars"></i>
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <i className="fa-solid fa-bell"></i>
              <i id='circle_blank' className="fa-regular fa-circle"></i>
              <i id='three_dot' className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        </nav>
      </header>

     

    </>

  )
}

export default Navbar