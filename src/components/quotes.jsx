import React from "react";
import "./quotes.css";

function Quotes({quote,quoteAuthor,url}) {

  return (
    <div className="quotes">
      <blockquote>
        {quote}
        <a href={url} target="_blank" rel="noopener noreferrer"> {quoteAuthor}</a>
      </blockquote>
    </div>
  );
};

export default Quotes;
