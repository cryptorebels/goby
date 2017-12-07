import { connect } from 'react-redux'
import Summaries from '../components/Summaries'

export default connect(
  (state) => ({
    summaries: state.summaries,
  })
)(Summaries)
