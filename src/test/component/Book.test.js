import React from "react";
import { shallow, mount } from "enzyme";

import Book from "../../component/Book";

const mock = {
  book: {
    title: "Book",
    shelf: "read",
    imageLinks: { smallThumbnail: "" },
    authors: ["Ramiro Pedrozo"]
  },
  shelves: [
    { name: "currentlyReading", title: "Currently Reading" },
    { name: "wantToRead", title: "Want to Read" },
    { name: "read", title: "Read" }
  ],
  handleChangeShelf: jest.fn()
};

it("renders without crashing", () => {
  const bookWrapper = (
    <Book
      book={mock.book}
      shelves={mock.shelves}
      handleChangeShelf={mock.handleChangeShelf}
    />
  );
  expect(shallow(bookWrapper)).toMatchSnapshot();
});

it("Should call the handleChangeShelf", () => {
  const bookWrapper = (
    <Book
      book={mock.book}
      shelves={mock.shelves}
      handleChangeShelf={mock.handleChangeShelf}
    />
  );

  mount(bookWrapper).find("select").simulate("change");
  expect(mock.handleChangeShelf).toHaveBeenCalledTimes(1);
});
