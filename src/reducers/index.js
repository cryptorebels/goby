import { combineReducers } from 'redux'
import _ from 'lodash'

import api from './api'
import markets from './markets'
import events from './events'

export const idsMapper = (arrayOfObjects, id = 'id') => {
  const all = {}
  const ids = []
  _.each(arrayOfObjects, (content) => {
    all[content[id]] = content
    ids.push(content.id)
  })

  return {
    all,
    ids
  }
}

export default combineReducers({
  api,
  markets,
  events,
})
