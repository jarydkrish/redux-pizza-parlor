import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART,
  CLEAR_CART,
} from '../constants/cart';

import { getPizza } from './pizzas';

const initialState = [];

export function getTotalCartItems(state) {
  return state.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);
}

export function getTotalCartPrice(state) {
  const cartItems = getCartItemsWithProducts(state);
  return cartItems.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.item.price, 0);
}

export function getCartItems(state) {
  return state.cart;
}

export function getCartItemsWithProducts(state) {
  return state.cart.map((item) => ({
    ...item,
    item: getPizza(state, item.pizza_id),
  }));
}

// Our action should only push a pizza ID to the cart.
export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const pizzaId = action.payload;
      const pizzaIndex = state.findIndex(cartItem => cartItem.pizza_id === pizzaId);
      if (pizzaIndex === -1) {
        return [
          ...state,
          {
            pizza_id: pizzaId,
            quantity: 1,
          },
        ];
      } else {
        return [
          ...state.slice(0, pizzaIndex),
          {
            ...state[pizzaIndex],
            quantity: state[pizzaIndex].quantity + 1,
          },
          ...state.slice(pizzaIndex + 1),
        ];
      }
    }
    case REMOVE_PIZZA_FROM_CART: {
      const pizzaId = action.payload;
      const pizzaIndex = state.findIndex(cartItem => cartItem.pizza_id === pizzaId);
      const pizza = state[pizzaIndex];
      if (pizza) {
        if (pizza.quantity > 1) {
          return [
            ...state.slice(0, pizzaIndex),
            {
              ...pizza,
              quantity: pizza.quantity - 1,
            },
            ...state.slice(pizzaIndex + 1),
          ];
        } else {
          return [
            ...state.slice(0, pizzaIndex),
            ...state.slice(pizzaIndex + 1),
          ];
        }
      } else {
        return state;
      }
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
