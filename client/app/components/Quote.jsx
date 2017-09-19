import React from 'react';

const Quote = (props) => (
  <div className="quote">
    <p>{props.quoteObj.quote}</p>
    <p>- {props.quoteObj.author}</p>
  </div>
);

export default Quote;

