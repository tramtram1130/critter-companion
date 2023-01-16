import React from 'react'
import './Results.css'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const Results = ({ bugs, addToCollection }) => {
  const allBugs = bugs.map(bug => {
    return (
      <Card
        key={bug.id}
        id={bug.id}
        name={bug.name['name-USen']}
        imgUrl={bug.image_uri}
        fileName={bug['file-name']}
        price={bug.price}
        bio={bug['museum-phrase']}
        addToCollection={addToCollection}
      />
    )
  })
  return (
    <div className="results">
      {allBugs}
    </div>
  )
}

export default Results

Results.propTypes = {
  bugs: PropTypes.array.isRequired,
  addToCollection: PropTypes.func.isRequired,
}