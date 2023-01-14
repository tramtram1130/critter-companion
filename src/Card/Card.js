import React from 'react'
import './Card.css'
import MicroModal from 'react-micro-modal'

const Card = ({ name, imgUrl, price, bio }) => {
  return (
    <MicroModal
      trigger={(open) => (
        <div className="card">
          <img onClick={open} src={imgUrl} />
        </div>
      )}
    >
      {(close) => (
        <div className='modal'>
          <h2>{name}</h2>
          <p>{bio}</p>
          <button className='close-modal-button' onClick={close}>
            Close!
          </button>
        </div>
      )}
    </MicroModal>
  )
}

export default Card