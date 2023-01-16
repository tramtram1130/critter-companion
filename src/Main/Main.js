import React, { useState, useEffect } from 'react'
import './Main.css'
import Form from '../Form/Form'
import Results from '../Results/Results'

function Main() {

  const [bugs, setBugs] = useState([])
  const [filteredCritters, setFilteredCritters] = useState([])
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


  return (
    <div className="main">
      <h1 className="app-name">Critter Companion</h1>
      <Form filterCritters={filterCritters} />
      <div className="home-gif-container">
        <img className="home-gif" alt="Dog Villager dancing" src="https://media.tenor.com/gxtnvT8-FnUAAAAi/acnh.gif" />
      </div>
      {!isLoading && <Results bugs={filteredCritters} />}
    </div>
  )

}

export default Main