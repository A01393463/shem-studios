import React from 'react';
import ReactDOM from 'react-dom';

// App component
class App extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}


// runs client side
if(Meteor.isClient) {
  // on startup
  Meteor.startup(function() {
    // render App component inside render-target
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}
