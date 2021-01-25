import React, { Component } from 'react';
import './App.css';
////////// Sam ADDED //////////
import { connect } from 'react-redux'; /* code change */


class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

////////// Sam ADDED //////////
const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);