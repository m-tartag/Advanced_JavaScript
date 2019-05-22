import React, { Component } from 'react';

export class Practice extends React.Component {
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

export default Practice;

// React: Write a React Component from Scratch

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
