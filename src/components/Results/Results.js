import React from 'react'
import './Results.css'
import Card from '../Card/Card'

const Results = (props) => {
  const allBugs = props.bugs.map(bug => {
    return (
      <Card
        key={bug.id}
        id={bug.id}
        name={bug.name['name-USen']}
        imgUrl={bug.image_uri}
        fileName={bug['file-name']}
        price={bug.price}
        bio={bug['museum-phrase']}
        addToCollection={props.addToCollection}
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