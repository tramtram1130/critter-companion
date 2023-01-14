import React from 'react'
import './Card.css'
import MicroModal from 'react-micro-modal'

const Card = ({ name, imgUrl, price, bio, fileName }) => {
  return (
    <MicroModal
      trigger={(open) => (
        <div className="card">
          <img onClick={open} src={imgUrl} />
        </div>
      )}
    >
      {(close) => (
        <div className="modal">
          <h2 className="critter-name">{name}</h2>
          <img className="critter-portrait" alt={name} src={imgUrl}/>
          <p className="critter-bio">{bio}</p>
          <div className="bottom-row">
            <p>Worth: {price} bells</p>
            <a href={`https://animalcrossing.fandom.com/wiki/` + fileName} >Additional information</a>
          </div>
          <button className='close-modal-button' onClick={close}>
            Close!
          </button>
        </div>
      )}
    </MicroModal>
  )
}

export default Card