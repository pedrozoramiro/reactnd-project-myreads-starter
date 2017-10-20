import React, { Component } from "react";

import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class BookGrid extends Component {

  componentDidMount = () =>  this.props.onLoadAllBooks();

  render() {
    const { shelves, books ,updateShelve} = this.props;
    return (
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
                    onChangeShelve={updateShelve}
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
  }
}

export default BookGrid;
