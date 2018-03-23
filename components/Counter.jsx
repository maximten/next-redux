import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { add, sub, counter } = this.props;
    return (
      <div>
        {counter}
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    );
  }
}