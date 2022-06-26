import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';

// TODO: instead of createStore use configureStore of the @reduxjs/toolkit?
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
