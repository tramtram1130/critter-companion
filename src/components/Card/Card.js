import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'
import MicroModal from 'react-micro-modal'

const Card = ({ id, name, imgUrl, fileName, price, bio, addToCollection }) => {

  const handleAddToCollection = () => {
    addToCollection(id)
  }

  return (
    <MicroModal
      trigger={(open) => (
        <div className="card">
          <img onClick={open} src={imgUrl} alt={name} />
        </div>
      )}
    >
      {(close) => (
        <div className="modal">
          <h2 className="critter-name">{name}</h2>
          <img className="critter-portrait" alt={name} src={imgUrl} />
          <p className="critter-bio">{bio}</p>
          <div className="bottom-row">
            <p>Worth: {price} bells</p>
            <a href={`https://animalcrossing.fandom.com/wiki/` + fileName} >Additional information</a>
          </div>
          <div>
            <button className="add-button" onClick={handleAddToCollection}>Add to Collection</button>
            <button className="close-modal-button" onClick={close}>Close!</button>
          </div>
        </div>
      )}
    </MicroModal>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  addToCollection: PropTypes.func.isRequired,
}
