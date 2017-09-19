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
        <p> Motivate Yo-Self! </p>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));