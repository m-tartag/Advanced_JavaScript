const List = props => <p>{props.tasks.join(', ')}</p>;

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* change code below this line */}
        <List tasks={['Code', 'Baseball', 'Code']} />
        <h2>Tomorrow</h2>
        <List tasks={['Code', 'Cook', 'Chill']} />
        {/* change code above this line */}
      </div>
    );
  }
}
