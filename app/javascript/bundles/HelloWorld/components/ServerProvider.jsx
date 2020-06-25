import React from 'react'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import ReactOnRails from 'react-on-rails'

// App.jsx from src/client/App.jsx
import App from './App'

const ServerProvider = (props, railsContext) => {
  const store = ReactOnRails.getStore('store');

  const { location } = railsContext;

  // Allows components to add properties to the object to store
  // information about the render.
  const context = {};

  // Important that you don't do this if you are redirecting or have an error.
  return (
    <Provider store={store}>
      <StaticRouter
        location={location}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );
}

export default ServerProvider