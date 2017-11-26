import { connect } from 'react-redux'
import Dashboard from './../components/Dashboard'

export default connect(
  (state) => ({
    events: state.events,
  })
)(Dashboard)
