class BookItem extends HTMLElement {
  set book (book) {
    this._book = book
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="card" style="width:400px">
            <div class="card-body bg-secondary text-white border rounded">
                #api-fetch-here
            </div>
        </div>
        `
  }
}

customElements.define('book-item', BookItem)
