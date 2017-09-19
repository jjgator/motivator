import React from 'react';

const Quote = (props) => (
  <div className="quote">
  	<h3 id='float'>Inspiration:</h3>
    <p id='float' className='quoteText'>{props.quoteObj.quote}</p>
    <p id='float' className='author'>- {props.quoteObj.author}</p>
  </div>
);

export default Quote;

