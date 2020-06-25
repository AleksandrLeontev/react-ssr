import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

let composeEnhancers

if (typeof window === 'undefined') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default (props = {}, railsContext) => {
  return composeEnhancers(applyMiddleware())(createStore)(rootReducer, props);
};