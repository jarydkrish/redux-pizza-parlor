import { combineReducers } from 'redux';

import cart from './cart';
import order from './order';
import pizzas from './pizzas';

export default combineReducers({
  cart,
  order,
  pizzas,
});
