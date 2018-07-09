import { combineReducers } from 'redux'
import persons from './persons'
import visibilityFilter from './visibilityFilter'


export default combineReducers({
  persons,
  visibilityFilter
})