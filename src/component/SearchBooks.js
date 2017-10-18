import React, { Component } from 'react'

import { Link } from "react-router-dom";

class SearchBooks extends Component {
  render() {
    return (
      <div>
         <Link  to="/">
          BookGrid
        </Link>
      </div>
    )
  }
}
export default SearchBooks;