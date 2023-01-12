import React, {Component} from 'react'
import './Main.css'
import Form from '../Form/Form'
import Results from '../Results/Results'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      bugs: []
    }
  }

  componentDidMount = () => {
    fetch('https://acnhapi.com/v1a/bugs')
      .then(response => response.json())
      .then(data => this.setState({ bugs: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="main">
        <h1 className="app-name">Critter Companion</h1>
        <Form />
        <div className="home-gif-container">
          <img className="home-gif" src="https://media.tenor.com/gxtnvT8-FnUAAAAi/acnh.gif" />
        </div>
        <Results />
      </div>
    )
  }
}

export default Main