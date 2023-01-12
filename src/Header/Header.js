import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img className="logo" alt="Animal Crossing logo" src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Animal_Crossing_Leaf.svg' />
      </div>
      <div className="link-container">
        <a>About Us</a>
      </div>
    </nav>
  )
}

export default Header