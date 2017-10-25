import React from "react";
import { Route } from "react-router-dom";

import BookGrid from "./component/BookGrid";
import SearchBooks from "./component/SearchBooks";
import * as ArrayUtils from "./utils/ArrayUtils";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      booksResultSearch: []
    };
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  updateShelve = (book, newShelf) => {
    const { books } = this.state;
    BooksAPI.update(book, newShelf).then(response => {
      if (response.error) {
        return; //TODO:mostrar erro com componente de toast
      }
      book.shelf = newShelf;
      const indexBook = books.findIndex(bookResult => bookResult.id === book.id);
      books.splice(indexBook, 1);
      books.push(book);
      this.setState({ books });
    });
  };

  searchBooks = query => {
    let { booksResultSearch, books } = this.state;
    BooksAPI.search(query, 100).then(newBooks => {
      booksResultSearch = !newBooks || newBooks.error ? [] : newBooks;
      if (booksResultSearch && Array.isArray(booksResultSearch)) {
        booksResultSearch = booksResultSearch.map(bookResult => {
          return books.find(book => book.id === bookResult.id) || bookResult;
        });
      }
      this.setState({ booksResultSearch });
    });
  };


  render() {
    const { booksResultSearch, books, shelves } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookGrid
              books={books}
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
              booksResultSearch={booksResultSearch}
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
