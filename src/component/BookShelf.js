import React, { Component } from "react";

import PropTypes from "prop-types";

import Book from "./Book";

const BookShelf = ({ books, shelf, handleChangeShelf }) => {
  const booksFilteredByShelf = books.filter(book => book.shelf === shelf.name);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksFilteredByShelf.map(function(book) {
            return (
              <li key={book.id}>
                <Book book={book} handleChangeShelf={handleChangeShelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
};

export default BookShelf;
