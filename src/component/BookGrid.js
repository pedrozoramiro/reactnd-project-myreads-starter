import React, { Component } from "react";

import PropTypes from "prop-types";

class BookGrid extends Component {
  render() {
    const { title, books, actions ,shelf} = this.props;
    //TODO: externalizar essa regra.
    const booksFilteredByShelf = books.filter( (book) => book.shelf === shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksFilteredByShelf.map(function(book) {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks
                            .smallThumbnail})`
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          {actions.map(function(act) {
                            return (
                              <option key={act.name} value={act.name} >{act.title}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
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
  shelf:PropTypes.string.isRequired,
  actions:PropTypes.array.isRequired,
  books:PropTypes.array.isRequired
};

export default BookGrid;
