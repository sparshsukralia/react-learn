import React from "react";

const Book = ({ image, title, author }) => {
  const clickHandler = () => {
    alert("Hello world");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </article>
  );
};

export default Book;
