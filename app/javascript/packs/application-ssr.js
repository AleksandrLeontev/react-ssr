import ReactOnRails from 'react-on-rails';

import Provider from '../bundles/HelloWorld/components/ServerProvider';
import store from "../bundles/HelloWorld/components/store";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Provider,
});

ReactOnRails.registerStore({
  store
});