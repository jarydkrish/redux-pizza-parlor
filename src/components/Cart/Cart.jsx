import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartItemsWithProducts, getTotalCartPrice } from "../../reducers/cart";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(getCartItemsWithProducts);
  const cartTotal = useSelector(getTotalCartPrice);

  useEffect(() => {
    document.title = 'Cart';
  }, [])

  return (
    <div className="mt-3 pb-5 mb-5">
      <div className="container">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.pizza_id} cartItem={cartItem} />
        ))}
        <div className="d-flex justify-content-end">
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/checkout" className="btn btn-primary btn-block mt-3">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart;
