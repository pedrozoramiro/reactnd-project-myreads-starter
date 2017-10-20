import "./App.css";

import BookGrid from './component/BookGrid'
import React from "react";
import { Route } from "react-router-dom";
import SearchBooks from './component/SearchBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookGrid} />
        <Route exact path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
