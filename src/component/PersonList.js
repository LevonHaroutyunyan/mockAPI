import React from 'react'
import Person from './Person'
import { connect } from "react-redux"
import * as actionCreators from "../actions/index"
import './PersonList.css'

class PersonList extends React.Component {
 

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    if(!this.props.persons) {
      return (
        null
      )
    }
    
    return (  
      <div className="table__wrraper">
         <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{  
          this.props.persons.map(todo =>
          <Person
            key={todo.id}
            {...todo}
            onClick={() => this.props.togglePerson(todo.id)}
            toggleChecked = {() => this.props.toggleChecked(todo.id)}
            checked = {todo.checked}
          />
        )}
        </tbody>
      </table>
      </div>
    )
  }
}

export default connect(null,actionCreators)(PersonList);







