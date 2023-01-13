import React from 'react'
import './Card.css'

const Card = (props) => {
  const { imgUrl } = props
  return (
    <div className="card">
      <img src={imgUrl} />
    </div>
  )
}

export default Card