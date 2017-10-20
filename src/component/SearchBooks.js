import React, { Component } from "react";

import Book from "./Book";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    query: ""
  };

  handleChangeSearch = e => {
    const { onSearchBook } = this.props;
    const query = e.target.value;
    this.setState({ query });
    onSearchBook(query);
  };

  render() {
    const { onUpdateShelve ,shelves, books} = this.props;
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleChangeSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(function(book) {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelves={shelves}
                    onChangeShelve={onUpdateShelve}
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
export default SearchBooks;
