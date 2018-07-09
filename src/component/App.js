import React from 'react'
import Filter from './Filter'
import AddPerson from '../containers/AddPerson'
import VisiblePersonList from '../containers/VisiblePersonList'
import './App.css'



const App = () => (
  <div className="main__wrraper">
    <AddPerson />
    <Filter />
    <VisiblePersonList />
  </div>
)

export default App