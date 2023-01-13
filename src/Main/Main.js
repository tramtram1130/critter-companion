import React, { Component } from 'react'
import './Main.css'
import Form from '../Form/Form'
import Results from '../Results/Results'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      bugs: [],
      filteredCritters: [],
      isLoading: false
    }
  }

  componentDidMount = () => {
    fetch('https://acnhapi.com/v1a/bugs')
      .then(this.setState({ isLoading: true }))
      .then(response => response.json())
      .then(data => this.setState({ bugs: data, isLoading: false }))
      .catch(err => console.log(err))
  }

  filterCritters = (month, hour, hemisphere) => {
    const selectedMonth = month ? parseInt(month) : undefined
    const selectedHour = hour ? parseInt(hour) : undefined
    const selectedHemisphere = hemisphere ? `month-array-${hemisphere}` : undefined
    const filteredBuddies = this.state.bugs.filter(bug => {
      if (!selectedMonth || !selectedHour || !selectedHemisphere) {
        return
      }
      if (bug.availability[selectedHemisphere].includes(selectedMonth) && bug.availability['time-array']) {
        return bug
      }
    })
    this.setState({ filteredCritters: filteredBuddies })
    return
  }

  render() {
    return (
      <div className="main">
        <h1 className="app-name">Critter Companion</h1>
        <Form filterCritters={this.filterCritters}/>
        <div className="home-gif-container">
          <img className="home-gif" src="https://media.tenor.com/gxtnvT8-FnUAAAAi/acnh.gif" />
        </div>
        {!this.state.isLoading && <Results bugs={this.state.filteredCritters} />}
      </div>
    )
  }
}

export default Main