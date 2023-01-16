import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <Link to='/'>
      <div className="logo-container">
        <img className="logo" alt="Animal Crossing logo" src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Animal_Crossing_Leaf.svg' />
      </div>
      </Link>
      <div className="link-container">
        <a>My Collection</a>
      </div>
    </nav>
  )
}

export default Header