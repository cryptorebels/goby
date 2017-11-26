import { connect } from 'react-redux'
import App from '../components/App'

export default connect(
  (state) => ({
    api: state.api,
    markets: state.markets,
  })
)(App)
