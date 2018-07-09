import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';
import './AddPerson.css';

const AddPerson = ({ dispatch }) => {
  let input
  let mail

  return (
    <div className="add_person">
      <h3 className="recipient_text">Add recipient</h3>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPerson(mail.value, input.value))
        input.value = ''
        mail.value = ''
      }}>
        <div className="input__wrraper">
          <div className="email__wrraper">
            <label className="email__text">Email</label> <br />
            <input type="email" placeholder="johndoe@gmail.com" className="email" ref={node => input = node} />
          </div>
          <div className="name__wrraper">
            <label className="name__text">Name</label> <br />
            <input placeholder="John Doe" className="name" ref={email => mail = email} />
            <button className="add" type="submit">
              Add email
        </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddPerson)