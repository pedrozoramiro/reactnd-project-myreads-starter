import "./App.css";

import BookShelf from './component/BookShelf'
import React from "react";
import { Route } from "react-router-dom";
import SearchBooks from './component/SearchBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookShelf} />
        <Route exact path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
