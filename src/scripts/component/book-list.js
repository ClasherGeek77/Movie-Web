import './book-item.js'
class BookList extends HTMLElement {
  set books (books) {
    this._books = books
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._books.forEach(book => {
      const bookItemElement = document.createElement(
        'book-item')
      bookItemElement.book = book
      this.appendChild(bookItemElement)
    })
  }

  renderError (message) {
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }
}
customElements.define('book-list', BookList)
