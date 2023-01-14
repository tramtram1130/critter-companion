import React from 'react'
import './Card.css'
import MicroModal from 'react-micro-modal'

const Card = ({ imgUrl }) => {
  console.log(imgUrl)
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
          <h2>Modal</h2>
          <button className='close-modal-button' onClick={close}>
            Close!
          </button>
        </div>
      )}
    </MicroModal>
  )
}

export default Card