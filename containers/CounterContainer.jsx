import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'
import { add, sub } from '../redux/actions/counter.js'

class CounterContainer extends Component {
  render () {
    const { add, sub, counter } = this.props;
    return (
      <Counter add={add} sub={sub} counter={counter}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch(add())
    },
    sub: () => {
      dispatch(sub())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)