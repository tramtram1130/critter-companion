import React, { useState, useEffect } from 'react'
import './Main.css'
import Form from '../Form/Form'
import Results from '../Results/Results'
import Collection from '../Collection/Collection'
import isabella from '../../assets/images/isabella.gif'
import { Route } from 'react-router-dom'

function Main() {

  const [bugs, setBugs] = useState([])
  const [filteredCritters, setFilteredCritters] = useState([])
  const [collection, setCollection] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const getBugs = async () => {
    const url = 'https://acnhapi.com/v1a/bugs'
    setError("")
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const critters = await response.json()
      setBugs(critters)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getBugs()
  }, [])

  const filterCritters = (month, hour, hemisphere) => {
    const selectedMonth = month ? parseInt(month) : undefined
    const selectedHour = hour ? parseInt(hour) : undefined
    const selectedHemisphere = hemisphere ? `month-array-${hemisphere}` : undefined
    const filteredBuddies = bugs.filter(bug => {
      if (!selectedMonth || !selectedHour || !selectedHemisphere) {
        return
      }
      if (bug.availability[selectedHemisphere].includes(selectedMonth) && bug.availability['time-array'].includes(selectedHour)) {
        return bug
      }
    })
    setFilteredCritters(filteredBuddies)
    return
  }

  const addToCollection = (bugId) => {
    const bugToAdd = bugs.find(bug => bugId === bug.id)
    if (!collection.includes(bugToAdd)) {
      setCollection([...collection, bugToAdd])
    }
  }

  return (
    <main className="main">
      <h1 className="app-name">Critter Companion</h1>
      <Route exact path="/"
        render={() => {
          return (
            <div className="home-container">
              <Form filterCritters={filterCritters} />
              <div className="home-gif-container">
                {!filteredCritters.length && <img className="home-gif" alt="Dog Villager dancing" src={isabella} />}
              </div>
              {!isLoading && <Results bugs={filteredCritters} addToCollection={addToCollection} />}
            </div>
          )
        }}
      />
      <Route exact path="/collection"
        render={() => {
          return (
            <Collection collection={collection} />
          )
        }}
      />
    </main>
  )
}

export default Main