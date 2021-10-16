import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} />;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
