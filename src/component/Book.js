import React from "react";
import PropTypes from "prop-types";
import * as Const from "../utils/Const";

const Book = ({ book, handleChangeShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={book.shelf || 'none'}
            onChange={e => handleChangeShelf(book, e.target.value)}
          >
            <option disabled>
              Move to...
            </option>
            {Const.SHELVES.map(function(shelve) {
              return (
                <option key={shelve.name} value={shelve.name}>
                  {shelve.title}
                </option>
              );
            })}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};


Book.defaultProps = {
  book:{ shelf:'none'}
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleChangeShelf: PropTypes.func.isRequired
};

export default Book;
