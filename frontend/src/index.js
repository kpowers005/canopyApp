import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionMethods from './store/session';
import ReviewProvider from './context/ReviewContext';
import { ModalProvider } from './context/Modal';

import configureStore from './store';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionMethods = sessionMethods;
}

function Root () {
  return (
    <Provider store={store}>
      <ModalProvider>
        <ReviewProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </ReviewProvider>
      </ModalProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
