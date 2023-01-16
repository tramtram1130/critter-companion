import React from 'react'
import './Collection.css'
import Results from '../Results/Results'

const Collection = ({ collection }) => {
  return (
    <div>
      <h3>My Collection</h3>
      <Results bugs={collection} />
    </div>
  )
}

export default Collection