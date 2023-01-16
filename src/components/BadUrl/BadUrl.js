import React from 'react'
import { Link } from 'react-router-dom'
import './BadUrl.css'

const BadUrl = () => {
  return (
    <div className="bad-url-container">
      <div className="bad-url-message-container">
        <h2 className="bad-url-message">...You've detoured quite a bit.</h2>
      </div>
      <Link to="/">
        <button className="return-home-button">Return Home</button>
      </Link>
    </div>
  )
}

export default BadUrl