import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";

const BookGrid = ({ shelves, books, handleChangeShelf }) => (
  <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(function(shelf) {
            return (
              <BookShelf
                key={shelf.name}
                shelf={shelf}
                books={books}
                shelves={shelves}
                handleChangeShelf={handleChangeShelf}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
    }
  </div>
);

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
};


export default BookGrid;
