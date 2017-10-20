import React from "react";
import { Route } from "react-router-dom";

import BookGrid from "./component/BookGrid";
import SearchBooks from "./component/SearchBooks";
import * as ArrayUtils from "./utils/ArrayUtils";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { name: "currentlyReading", title: "Currently Reading" },
      { name: "wantToRead", title: "Want to Read" },
      { name: "read", title: "Read" }
    ]
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  updateShelve = (book, newShelf) => {
    const { books } = this.state;
    BooksAPI.update(book, newShelf)
    book.shelf= newShelf;
    this.setState({ books });
  };

  searchBooks = query => {
    let {books} = this.state;    
    BooksAPI.search(query, 100).then(newBooks => {
      //TODO: cath error
      newBooks = !newBooks || newBooks.error ? [] : newBooks;
      books = ArrayUtils.mergeByProperty(books,newBooks,'id');
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
              handleChangeShelf={this.updateShelve}
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
              handleChangeShelf={this.updateShelve}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
