import { useDispatch } from "react-redux";
import { ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART } from "../../constants/cart";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_PIZZA_FROM_CART,
      payload: cartItem.pizza_id,
    });
  };

  const addToCart = () => {
    dispatch({
      type: ADD_PIZZA_TO_CART,
      payload: cartItem.pizza_id,
    });
  };

  const totalPrice = cartItem.quantity * cartItem.item.price;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 col-lg-3">
          <img src={cartItem.item.image_path} className="img-fluid rounded-start" alt={cartItem.item.name} />
        </div>
        <div className="col-md-8 col-lg-9">
          <div className="card-body">
            <h5 className="card-title">{cartItem.item.name}</h5>
            <p className="card-text">{cartItem.item.description}</p>
            <p className="card-text">Price: ${cartItem.item.price}</p>
            <p className="card-text">Quantity: {cartItem.quantity}</p>
            <p className="card-text">
              <small className="text-muted">${totalPrice.toFixed(2)}</small>
            </p>
            <div>
              <button className="btn btn-danger" onClick={removeFromCart}>Remove</button>
              <button className="btn btn-primary ms-3" onClick={addToCart}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
