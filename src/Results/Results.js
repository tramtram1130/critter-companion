import React from 'react'
import './Results.css'
import Card from '../Card/Card'

const Results = (props) => {
  const allBugs = props.bugs.map(bug => <Card key={bug.id} name={bug.name['name-USen']} imgUrl={bug.image_uri} price={bug.price} bio={bug['museum-phrase']} />)
  return (
    <div className="results">
      {allBugs}
    </div>
  )
}

export default Results