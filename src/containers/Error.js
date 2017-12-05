import { connect } from 'react-redux'
import Error from '../components/Error'

export default connect(
  (state) => ({
    message: state.markets.error || state.events.error || state.balances.error,
  })
)(Error)
