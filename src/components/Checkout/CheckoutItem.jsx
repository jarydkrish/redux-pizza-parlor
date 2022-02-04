import { useDispatch } from "react-redux";
import { ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART } from "../../constants/cart";

function CheckoutItem({ cartItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{cartItem.item.name}</div>
        <span className="text-muted">{cartItem.item.price}</span>
      </div>
      <span className="badge bg-primary rounded-pill">{cartItem.quantity}</span>
    </li>
  )
}

export default CheckoutItem;
