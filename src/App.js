import "./App.css";

import * as BooksAPI from "./BooksAPI";

import BookGrid from "./component/BookGrid";
import React from "react";
import { Route } from "react-router-dom";
import SearchBooks from "./component/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { name: "currentlyReading", title: "Currently Reading" },
      { name: "wantToRead", title: "Want to Read" },
      { name: "read", title: "Read" }
    ]
  };

  updateShelve = (book, newShelve) => {
    const { books } = this.state;
    book.shelf = newShelve;
    this.setState({ books });
    BooksAPI.update(book,newShelve).then(books => console.log(book));
  };

  loadAllBooks =()=>{
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  searchBooks = query => {
    BooksAPI.search(query, 100).then(books => {
      books = !books || books.error ? [] : books;
      this.setState({ books });
    });
  };

  render() {
    const { books, shelves } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookGrid
              books={books}
              shelves={shelves}
              updateShelve={this.updateShelve}
              onLoadAllBooks={this.loadAllBooks}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={books}
              shelves={shelves}
              onSearchBook={this.searchBooks}
              onUpdateShelve={this.updateShelve}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
