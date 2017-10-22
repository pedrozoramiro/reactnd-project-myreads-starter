import React from "react";
import { shallow, mount } from "enzyme";

import SearchBooks from "../../component/SearchBooks";

import renderer from "react-test-renderer";

import { StaticRouter } from "react-router";

const mock = {
  books: [
    { 
      id:'1',
      title: "Book [read]",
      shelf: "none",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    },
    {
      id:'2',
      title: "Book [wantToRead]",
      shelf: "wantToRead",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    }
  ],
  shelves: [
    { name: "currentlyReading", title: "Currently Reading" },
    { name: "wantToRead", title: "Want to Read" },
    { name: "read", title: "Read" }
  ],
  handleChangeShelf: jest.fn(),
  onSearchBook: jest.fn()
};

it("renders without crashing", () => {
  const searchBooksWrapper = (
    <SearchBooks
      books={mock.books}
      shelves={mock.shelves}
      handleChangeShelf={mock.handleChangeShelf}
      onSearchBook={mock.onSearchBook}
    />
  );
  expect(shallow(searchBooksWrapper)).toMatchSnapshot();
});

it("Should call the onSearchBook", () => {
  var context = {};
  const searchBooksWrapper = (
    <StaticRouter location="someLocation" context={context}>
      <SearchBooks
        books={mock.books}
        shelves={mock.shelves}
        handleChangeShelf={mock.handleChangeShelf}
        onSearchBook={mock.onSearchBook}
      />
    </StaticRouter>
  );

  mount(searchBooksWrapper).find("input").simulate('change', { target: { value: 'Hello' } });
  expect(mock.onSearchBook).toHaveBeenCalledTimes(1);
});
