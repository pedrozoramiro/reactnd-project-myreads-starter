import PropTypes from "prop-types";
import React from "react";

const Book = ({ title, authors, imageUrl, shelves }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="book-shelf-changer">
          <select>
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
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired
};

export default Book;