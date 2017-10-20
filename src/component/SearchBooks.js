import * as BooksAPI from "./../BooksAPI";

import React, { Component } from "react";

import Book from "./Book";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
    shelves: [
      { name: "currentlyReading", title: "Currently Reading" },
      { name: "wantToRead", title: "Want to Read" },
      { name: "read", title: "Read" }
    ]
  };

  handleChangeSearch = e => {
    const query = e.target.value;
    this.setState({ query });
    BooksAPI.search(query, 100).then(books => {
      books = !books || books.error ? [] : books;
      this.setState({ books });
    });
  };

  render() {
    const { onChangeShelve } = this.props;
    const { books, shelves, query } = this.state;

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
                    onChangeShelve={onChangeShelve}
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
