import React from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from "./styles/global";

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

console.tron.log('testando');

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
