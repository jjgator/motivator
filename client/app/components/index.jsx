import React from 'react';
import {render} from 'react-dom';
import Quote from './Quote.jsx';
import * as QuotesModel from '../models/quotes.js';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
      quotes: [],
      toggle: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
   }

  componentDidMount() {
  	let url = 'http://quotes.rest/quote/random.json';
  	QuotesModel.getQuote(url, null).then((response) => {
  		let responseArray = [];
  		responseArray.push(response.data.contents);
    	this.setState({quotes: responseArray});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = event.target.input.value;
    let url = 'http://quotes.rest/quote/search.json';

    QuotesModel.getQuote(url, input).then((response) => {
  		let responseArray = [];
  		responseArray.push(response.data.contents);
  		QuotesModel.saveQuote('http://localhost:3000/quotes', {
  			text: response.data.contents.quote,
  			author: response.data.contents.author
  		});

    	this.setState({quotes: responseArray});
    });
  }

  handleClick(event) {
    event.preventDefault();
    let input = event.target.id;
    let url = 'http://quotes.rest/quote/search.json';

    QuotesModel.getQuote(url, input).then((response) => {
  		let responseArray = [];
  		responseArray.push(response.data.contents);
  		QuotesModel.saveQuote('http://localhost:3000/quotes', {
  			text: response.data.contents.quote,
  			author: response.data.contents.author
  		});

    	this.setState({quotes: responseArray});
    });
  }

  render () {
    return (
      <div>
      	<div className='banner'>
			  	<div className='randomQuote'>
			  		{this.state.quotes.map((quote, i) => 
			  			<Quote quoteObj={quote} key={i} />	
						)}
			  	</div>
			  </div>
		  	<div className='categories'>
		  		<h3>Top Categories: </h3>
		  		<row>
		  			<button type='button' id='courage' onClick={this.handleClick}>Courage</button>
		  			<button type='button' id='love' onClick={this.handleClick}>Love</button>
		  			<button type='button' id='peace' onClick={this.handleClick}>Peace</button>
		  			<button type='button' id='humor' onClick={this.handleClick}>Humor</button>
		  			<button type='button' id='success' onClick={this.handleClick}>Success</button>
		  		</row>
		  	</div>
		  	<form className='form' onSubmit={this.handleSubmit}>
		      <label>Motivate Yo-Self!  </label><input id="input"/>
		      <button type='submit' >Submit</button>
		    </form>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
