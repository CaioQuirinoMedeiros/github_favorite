import React from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from "./styles/global";

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
