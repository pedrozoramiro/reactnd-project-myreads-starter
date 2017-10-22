import React from "react";
import { shallow, mount } from "enzyme";

import BookGrid from "../../component/BookGrid";


const mock = {
  books:[
    {
      title: "Book",
      shelf: "read",
      imageLinks: { smallThumbnail: "" },
      authors: ["Ramiro Pedrozo"]
    }
  ] ,
  shelves: [
    { name: "currentlyReading", title: "Currently Reading" },
    { name: "wantToRead", title: "Want to Read" },
    { name: "read", title: "Read" }
  ],
  handleChangeShelf: jest.fn()
};

it("renders without crashing", () => {
  const bookWrapper = (
    <BookGrid
      books={mock.books}
      shelves={mock.shelves}
      handleChangeShelf={mock.handleChangeShelf}
    />
  );
  expect(shallow(bookWrapper)).toMatchSnapshot();
});
