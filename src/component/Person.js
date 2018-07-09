import React from 'react'
import { connect } from 'react-redux'
import './Person.css'


const Person = ({ onClick, completed, mail, name, toggleChecked, checked }) => (
  <tr>
    <td>
      <label className="checkbox__container">
        <input className="for__select" type="checkbox" value={checked} onChange={toggleChecked} />
        <span className="checkType"></span>
      </label>
    </td>
    <td> {mail}</td>
    <td>{name}</td>
    <td>{completed ? 'Sent' : 'Unsent'}</td>
    <td><button className="send" style={{ visibility: completed ? 'hidden' : 'visible' }} onClick={onClick}>Send</button></td>
  </tr>
)

const mapStateToProps = (state) => {
  return {
    state
  }
};


export default connect(mapStateToProps)(Person)