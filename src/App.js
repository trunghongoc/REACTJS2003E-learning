import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import Color from './components/Color'
import View from './components/View'

import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Color/>
        <View/>
      </Provider>
    </>
  );
}

export default App;
