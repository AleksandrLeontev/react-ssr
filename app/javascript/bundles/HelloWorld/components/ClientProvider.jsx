import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from "./App";

const ClientProvider = () => {
  const store = ReactOnRails.getStore('store');
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
}

export default props => <ClientProvider {...props}/>