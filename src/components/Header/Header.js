import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/animal_crossing_logo.svg'

const Header = () => {
  return (
    <nav className="header">
      <Link to='/'>
        <div className="logo-container">
          <img className="logo" alt="Animal Crossing logo" src={logo} />
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