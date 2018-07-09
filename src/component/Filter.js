import React from 'react'
import FilterLink from '../containers/FilterLink'
import DeleteLink from '../containers/DeleteLink'
import { VisibilityFilters, deleteActions } from '../actions'
import './Filter.css'


const Filter = (props) => (
  <div className="filter__wrraper">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      <span className=" nav__item show__all">Show all</span>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      <span className="nav__item show__unsent">Show sent</span>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      <span className="nav__item show__sent">Show unsent</span>
    </FilterLink>
    <DeleteLink handleDelete={deleteActions.DELETE}>
      <span className="nav__item delete__selected_recipients">Delete selected recipients</span>
    </DeleteLink>
  </div>
)

export default Filter