import React, { Component } from 'react';
import { Provider }  from 'react-redux';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../redux/reducers';
import App from '../components/App.jsx'

const store = createStore(reducers, composeWithDevTools());

export default class AppContainer extends Component {
  render () {
    const { children, title } = this.props;
    return (
      <Provider store={store}>
        <App children={children} title={title}/>
      </Provider>
    )
  }
}