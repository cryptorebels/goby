import { connect } from 'react-redux'
import Selector from './../components/Selector'

export default connect(
  (state) => ({
    markets: state.markets,
  })
)(Selector)
