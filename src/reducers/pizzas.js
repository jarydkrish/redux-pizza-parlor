import {
  ADD_PIZZA,
  ADD_MULTIPLE_PIZZAS,
  EDIT_PIZZA,
  DELETE_PIZZA,
  SET_PIZZAS,
} from '../constants/pizzas';

const initialState = [];

export const getPizzas = state =>  state.pizzas;

export const getPizza = (state, id) => state.pizzas.find(pizza => pizza.id === id);

function pizza(state = initialState, action) {
  switch (action.type) {
    case ADD_PIZZA:
      return [
        ...state,
        action.payload,
      ];
    case ADD_MULTIPLE_PIZZAS:
      return [
        ...state,
        ...action.payload,
      ];
    case EDIT_PIZZA: {
      const index = state.findIndex(pizza => pizza.id === action.payload.id);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1),
      ];
    }
    case DELETE_PIZZA: {
      const index = state.findIndex(pizza => pizza.id === action.payload.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    case SET_PIZZAS:
      return action.payload;
    default:
      return state;
  }
}

export default pizza;
