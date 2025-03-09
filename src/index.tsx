import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routing } from './router/Routing';
import { store } from './store/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);
