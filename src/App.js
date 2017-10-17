import "./App.css";

import * as BooksAPI from "./BooksAPI";

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

  render() {
    const { shelves, books } = this.state;
    console.log(books);
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
                    actions={shelves}
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