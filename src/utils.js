const api = process.env.API_ENDPOINT || require('../package.json').api

export const parseResponse = (response) => {
  if (response.status >= 400) {
    throw response
  }
  return response.data
}

const filter = (params = {}) => '?filter=' + JSON.stringify(params)

const where = (conditions = {}) =>
  filter({where: conditions})

export const uri = (path, conditions = {}) => {
  let url = `${api}/${path}`
  if (Object.keys(conditions).length) {
    url += where(conditions)
  }

  return url
}

export const connectionErrorMessage = (error) => {
  let message = 'There was a connection problem'
  if (!error.response) {
    message = 'Apparently there\'s no connection with the API'
  }
  if (error.response && error.response.status >= 400) {
    message = error.response.statusText
  }

  return message
}
