import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer, // Our main reducer
  {}, // Our initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux dev tools
);

export default store;
