import React from 'react';
import {render} from 'react-dom';
import Quote from './Quote.jsx';
import * as QuotesModel from '../models/quotes.js';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
      quotes: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  componentDidMount() {
  	QuotesModel.getQuote(null).then((response) => {
  		let responseArray = [];
  		responseArray.push(response.data.contents);
    	this.setState({quotes: responseArray});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = event.target.value;
    console.log(input);
    QuotesModel.getQuote(input).then((response) => {
    	console.log(input);
  		let responseArray = [];
  		responseArray.push(response.data.contents);
    	this.setState({quotes: responseArray});
    });
  }

  render () {
    return (
      <div>
      	<div className='banner'>
	      	<row>
		      	<h3>Random Inspiration: </h3>
				  	<div>
				  		{this.state.quotes.map((quote, i) => 
				  			<Quote quoteObj={quote} key={i} />	
							)}
				  	</div>
				  </row>
			  </div>
		  	<div>
		  		<h4>Top Categories: </h4>
		  		<row>
		  			<button type='button' id='courage'>Courage</button>
		  			<button type='button' id='love'>Love</button>
		  			<button type='button' id='peace'>Peace</button>
		  			<button type='button' id='humor'>Humor</button>
		  			<button type='button' id='success'>Success</button>
		  		</row>
		  	</div>
		  	<form>
		      <label>Motivate Yo-Self!  </label><input id="input"/>
		      <button type='submit' onClick={this.handleSubmit}>Submit</button>
		    </form>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
