import React from 'react';
import {render} from 'react-dom';
import Likes from './Likes.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Motivate Yo-Self! </p>
        <Likes />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));