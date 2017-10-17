import React, { Component } from "react";

import Book from "./Book";
import PropTypes from "prop-types";

class BookGrid extends Component {
  render() {
    const { title, books, shelves, shelf } = this.props;
    //TODO: externalizar essa regra.
    const booksFilteredByShelf = books.filter(book => book.shelf === shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksFilteredByShelf.map(function(book) {
              return (
                <li key={book.id}>
                  <Book
                    authors={book.authors}
                    imageUrl={book.imageLinks.smallThumbnail}
                    shelves={shelves}
                    title={book.title}
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

BookGrid.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
};

export default BookGrid;
