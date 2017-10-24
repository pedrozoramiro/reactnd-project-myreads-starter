import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
import Book from "./Book";

class SearchBooks extends Component {

  handleChangeSearch = e => {
    const { onSearchBook } = this.props;
    const query = e.target.value;
    this.setState({ query });
    onSearchBook(query);
  };

  render() {
    const { handleChangeShelf, shelves, books } = this.props;
    const booksNone = books.filter(
      book => !book.shelf || book.shelf === "none"
    );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChangeSearch}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksNone.map(function(book) {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelves={shelves}
                    handleChangeShelf={handleChangeShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired,
  onSearchBook: PropTypes.func.isRequired
};

export default SearchBooks;
