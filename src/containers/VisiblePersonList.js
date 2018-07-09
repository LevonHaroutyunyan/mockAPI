import { connect } from 'react-redux'
import { togglePerson } from '../actions'
import PersonList from '../component/PersonList'
import { VisibilityFilters } from '../actions'


const getVisiblePersons = (persons, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return persons.data
    case VisibilityFilters.SHOW_COMPLETED:
      return persons.data.filter(item => item.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return persons.data.filter(item => !item.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  persons: getVisiblePersons(state.persons, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  togglePerson: id => dispatch(togglePerson(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonList)