import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import API_KEY from '../../../config.js';
import Quote from './Quote.jsx';
import * as QuotesModel from '../models/quotes.js';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
      quotes: []
    };
   }

  componentDidMount() {
  	QuotesModel.getQuote().then((response) => {
  		let responseArray = [];
  		responseArray.push(response.data.contents);
    	this.setState({quotes: responseArray});
    });
  }

  render () {
    return (
      <div>
      	<h3>Random Inspiration: </h3>
		  	<div>
		  		{this.state.quotes.map((quote, i) => 
		  			<Quote quoteObj={quote} key={i} />	
					)}
		  	</div>
		  	<form>

		      <label>Motivate Yo-Self!</label><input id="input"/>
		      <button type='submit'>Submit</button>
		    </form>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
