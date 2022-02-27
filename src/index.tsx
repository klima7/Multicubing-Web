import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './components/App'
import history from './utils/history'
import ThemeSupplier from "./components/ThemeSupplier"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSupplier>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <App />
        </ConnectedRouter>
      </ThemeSupplier>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
