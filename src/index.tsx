import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
