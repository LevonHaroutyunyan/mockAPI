import { connect } from 'react-redux'
import { deleteItems } from '../actions'
import Link from '../component/Link'

const mapDispatchToProps = (dispatch, arrayID) => ({
  onClick: () => dispatch(deleteItems(arrayID))
})

export default connect(
  null,
  mapDispatchToProps
)(Link)


