import axios from 'axios'
var baseURL = 'http://ws.audioscrobbler.com/2.0/?'

/**
 * pulls information from the form and builds the query URL for getinfo method
 * @returns {string} URL for Last.Fm API based on form input
 */
function buildArtistURL (term) {
  var searchTerm = term
  var queryParams = {
    method: 'artist.getinfo'
  }
  queryParams.artist = searchTerm
  queryParams.api_key = 'b7667cfa915ab2e48de7c3df1efc5922'
  queryParams.format = 'json'
  var params = Object.keys(queryParams)
    .map(key => {
      return key + '=' + queryParams[key]
    })
    .join('&')
  var finalURL = baseURL + params
  return finalURL
}

/**
 * pulls information from the form and builds the query URL for getsimilar method
 * @returns {string} URL for Last.Fm API based on form input
 **/
function buildArtistsURL (term) {
  var searchTerm = term
  var queryParams = {
    method: 'artist.getsimilar'
  }
  queryParams.artist = searchTerm
  queryParams.api_key = 'b7667cfa915ab2e48de7c3df1efc5922'
  queryParams.format = 'json'
  var params = Object.keys(queryParams)
    .map(key => {
      return key + '=' + queryParams[key]
    })
    .join('&')
  var finalURL = baseURL + params
  return finalURL
}

// Export an object containing methods we'll use for accessing the Last.fm API
export default {
  getArtist: async function (query) {
    const response = await axios.get(buildArtistURL(query))
    return response
  },
  getSimilarArtists: async function (query) {
    const response = axios.get(buildArtistsURL(query))
    return response
  }
}
