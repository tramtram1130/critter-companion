import React, { useState } from 'react'
import './Form.css'
import ribbon from '../../assets/images/ribbon-end-yellow.svg'
import PropTypes from 'prop-types'

function Form({ filterCritters, clearSearch }) {

  const [month, setMonth] = useState("")
  const [hour, setHour] = useState("")
  const [hemisphere, setHemisphere] = useState("")
  const [error, setError] = useState(false)

  const clearInputs = event => {
    event.preventDefault()
    setMonth("")
    setHour("")
    setHemisphere("")
    clearSearch()
  }

  const handleSubmit = event => {
    event.preventDefault()
    filterCritters(month, hour, hemisphere)
    return (!month || !hour || !hemisphere) ? setError(true) : setError(false)
  }

  return (
    <div className="form-page">
      <div className="form-styling">
        <img className="left-ribbon" src={ribbon} alt="ribbon" />
        <div className="form-container">
          <form className="selection-container">
            <select id="month" name="month" value={month} onChange={(event) => setMonth(event.target.value)}>
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select id="hour" name="hour" value={hour} onChange={(event) => setHour(event.target.value)}>
              <option value="">Time of the Day</option>
              <option value="0">12AM</option>
              <option value="1">1AM</option>
              <option value="2">2AM</option>
              <option value="3">3AM</option>
              <option value="4">4AM</option>
              <option value="5">5AM</option>
              <option value="6">6AM</option>
              <option value="7">7AM</option>
              <option value="8">8AM</option>
              <option value="9">9AM</option>
              <option value="10">10AM</option>
              <option value="11">11AM</option>
              <option value="12">12PM</option>
              <option value="13">1PM</option>
              <option value="14">2PM</option>
              <option value="15">3PM</option>
              <option value="16">4PM</option>
              <option value="17">5PM</option>
              <option value="18">6PM</option>
              <option value="19">7PM</option>
              <option value="20">8PM</option>
              <option value="21">9PM</option>
              <option value="22">10PM</option>
              <option value="23">11PM</option>
            </select>
            <select id="hemisphere" name="hemisphere" value={hemisphere} onChange={(event) => setHemisphere(event.target.value)}>
              <option value="">Hemisphere</option>
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </select>
            <button onClick={handleSubmit}>Search</button>
            <button onClick={clearInputs}>Clear</button>
          </form>
        </div>
        <img className="right-ribbon" src={ribbon} alt="ribbon" />
      </div>
      {error && <div className="error-msg-container">
        <p className="error-msg-text">...Please fill out the form entirely.</p></div>}
    </div>
  )
}

export default Form

Form.propTypes = {
  filterCritters: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
}
