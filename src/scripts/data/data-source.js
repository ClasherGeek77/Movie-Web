class DataSource {
  static searchMovie (keyword) {
    return fetch(
            `http://api.themoviedb.org/3/search/movie?api_key=516e28023e8c67e5c5ac446113fde8a6&query=${keyword}&page=1`
    ).then(response => {
      return response.json()
    }).then(responseJson => {
      if (responseJson.results) {
        return Promise.resolve(responseJson)
      } else {
        return Promise.reject(`${keyword} is not found`)
      }
    })
  }
}
export default DataSource
