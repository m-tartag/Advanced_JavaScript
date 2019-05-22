// Render to DOM

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById('result'));

// React: Create a Stateless Functional Component

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

// React: Create a Component with Composition

const ChildComponent = () => (
      <div>
        <p>I am the child</p>
      </div>
    );

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
