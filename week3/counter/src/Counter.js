import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>My Counter</h2>
        <div>
          <button onClick={this.decrement}>Decrement</button>
          <span><br></br><hr></hr>{this.props.count}<hr></hr><br></br></span>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);