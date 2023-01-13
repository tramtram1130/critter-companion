import React from 'react'
import './Results.css'
import Card from '../Card/Card'

const Results = (props) => {
  const allBugs = props.bugs.map(bug => <Card key={bug.id} imgUrl={bug.image_uri} />)
  return (
    <div className="results">
      {allBugs}
    </div>
  )
}

export default Results