import React from 'react'
import './Collection.css'
import PropTypes from 'prop-types'
import Results from '../Results/Results'

const Collection = ({ collection }) => {
  return (
    <div className="collection-container">
      <h3 className="my-collection-title">My Collection</h3>
      {!collection.length && <div className="collection-error-container"><h2 className="collection-error-msg">...It's pretty barren. Please add some critters.</h2></div>}
      <Results bugs={collection} />
    </div>
  )
}

export default Collection

Collection.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object)
}