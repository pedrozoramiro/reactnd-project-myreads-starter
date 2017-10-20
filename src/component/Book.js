import PropTypes from "prop-types";
import React from "react";

const Book = ({ book, shelves, onChangeShelve }) => {
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
            value={book.shelf}
            onChange={e => onChangeShelve(book, e.target.value)}>
            <option value="none" disabled>
              Move to...
            </option>
            {shelves.map(function(shelve) {
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired
};

export default Book;
