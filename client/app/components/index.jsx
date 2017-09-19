import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import API_KEY from '../../../config.js';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
      quote: null
    };
   }

  componentDidMount() {
    axios({
    	method:'get',
  		url:'http://quotes.rest/quote/random.json',
  		params: {
  			api_key: API_KEY
  		}
    }).then((response) => {
    	this.setState({quote: response.data.contents.quote})
    });
  }

  render () {
    return (
      <div>
      	<p>{this.state.quote}</p>	
      	<form>
	        <label>Motivate Yo-Self!</label><input id="input"/>
	        <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));