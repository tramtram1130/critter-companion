import React from 'react'
import './Collection.css'
import Results from '../Results/Results'

const Collection = ({ collection }) => {
  return (
    <div className="collection-container">
      <h3 className="my-collection-title">My Collection</h3>
      <Results bugs={collection} />
    </div>
  )
}

export default Collection