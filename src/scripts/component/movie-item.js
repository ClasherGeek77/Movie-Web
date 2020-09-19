class MovieItem extends HTMLElement {
  set movie (movie) {
    this._movie = movie
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="card" style="width:400px">
            <div class="card-body bg-secondary text-white border rounded">
                <img class="img-fluid" src="http://image.tmdb.org/t/p/w780${this._movie.poster_path}">
                <p class="mb-0"><mark><em>${this._movie.original_language}</mark></em></p>
                <h2 class="mb-0"><strong>${this._movie.title}</strong></h2>
                <p class="mb-0"><strong>Release Date : </strong>${this._movie.release_date}</p>
                <p class="mb-0"><strong>Vote : </strong>${this._movie.vote_average}/10</p>
            </div>
        </div>
        `
  }
}

customElements.define('movie-item', MovieItem)
