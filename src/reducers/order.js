import {
  SET_ORDER
} from '../constants/order';

const initialState = {};

export function getOrder(state) {
  return state.order;
}

export default function order(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.payload;
    default:
      return state;
  }
}
