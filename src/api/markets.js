import axios from 'axios'
import { uri, parseResponse, where } from './'

export const get = (conditions) =>
  axios.get(uri('markets' + where(conditions))).then(parseResponse)
