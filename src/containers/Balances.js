import { connect } from 'react-redux'
import Balances from '../components/Balances'

export default connect(
  (state) => ({
    markets: state.markets,
    balances: state.balances,
  })
)(Balances)
