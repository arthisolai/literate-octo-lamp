import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__link">Know about Dogs</h2>
      <label htmlFor="Search here"></label>
      <input id="Search"></input>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Dog">
        Article on Dog
      </a>
    </article>
  );
}
