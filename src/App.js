import "./App.css";

import * as BooksAPI from "./BooksAPI";

import Book from "./component/Book";
import BookGrid from "./component/BookGrid";
import React from "react";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { name: "currentlyReading", title: "Currently Reading" },
      { name: "wantToRead", title: "Want to Read" },
      { name: "read", title: "Read" }
    ],
    showSearchPage: false
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  updateShelve = (book, newShelve) => {
    const {books} = this.state;
    book.shelf = newShelve;
    this.setState({books});
   
  };

  render() {
    const { shelves, books } = this.state;
    const updateShelve = this.updateShelve;
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
                  <BookGrid
                    key={shelf.name}
                    shelf={shelf.name}
                    title={shelf.title}
                    books={books}
                    shelves={shelves}
                    onChangeShelve={updateShelve}
                  />
                );
              })}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </a>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default BooksApp;
