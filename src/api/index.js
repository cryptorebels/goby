const api = process.env.API_ENDPOINT || require('../../package.json').api

export const parseResponse = (response) => {
  if (response.status >= 400) {
    throw new Error(response)
  }
  return response.data
}

export const uri = (path) => `${api}/${path}`

export const filter = (params = {}) => '?filter=' + JSON.stringify(params)

export const where = (conditions = {}) =>
  filter({where: conditions})
