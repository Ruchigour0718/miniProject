import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <h1>hhelllllllllllllooooooo</h1>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81EEirFcB3L._AC_UY218_.jpg"
    alt=""
  />
);

const Title = () => <h1>I Love you to the Moon and back</h1>;
const Author = () => <h5> written by Arnold Bennett </h5>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
