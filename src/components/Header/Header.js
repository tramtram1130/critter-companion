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
      <Link to='/collection'>
        <div className="link-container">
          <p className="collection-link">My Collection</p>
        </div>
      </Link>
    </nav >
  )
}

export default Header