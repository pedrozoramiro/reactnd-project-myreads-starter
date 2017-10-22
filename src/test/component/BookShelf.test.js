import React from "react";
import { shallow, mount } from "enzyme";

import BookShelf from "../../component/BookShelf";


const mock = {
  books:[
    {
      id:'1',
      title: "Book [read]",
      shelf: "read",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    },
    {
      id:'2',
      title: "Book [wantToRead]",
      shelf: "wantToRead",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    },
    {
      id:'3',
      title: "Book [currentlyReading]",
      shelf: "currentlyReading",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    }
  ] ,
  shelves: [
    { name: "currentlyReading", title: "Currently Reading" },
    { name: "wantToRead", title: "Want to Read" },
    { name: "read", title: "Read" }
  ],
  handleChangeShelf: jest.fn(),
  shelf: {name:'wantToRead',title:'Want to Read'}
};

it("renders without crashing", () => {
  const bookShelfWrapper = (
    <BookShelf
      books={mock.books}
      shelf={mock.shelf}
      shelves={mock.shelves}
      handleChangeShelf={mock.handleChangeShelf}
    />
  );
  expect(shallow(bookShelfWrapper)).toMatchSnapshot();
});
