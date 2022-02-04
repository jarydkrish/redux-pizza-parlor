import { useSelector } from "react-redux";
import CheckoutItem from './CheckoutItem';

import { getCartItemsWithProducts, getTotalCartPrice } from "../../reducers/cart";

function CheckoutItems() {
  const cartItems = useSelector(getCartItemsWithProducts);
  const cartTotal = useSelector(getTotalCartPrice);

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Cart</h5>
        </div>
        <div className="card-body">
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.pizza_id} cartItem={cartItem} />
          ))}
        </div>
        <div className="card-footer d-flex justify-content-end">
          <p className="card-text">Total: ${cartTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItems;
