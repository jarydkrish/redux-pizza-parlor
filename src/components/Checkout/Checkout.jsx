import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import CheckoutInput from './CheckoutInput';
import CheckoutItems from './CheckoutItems';

import { SET_ORDER } from '../../constants/order';
import { getCartItems, getTotalCartPrice } from '../../reducers/cart';

const emptyOrder = {
  type: 'delivery',
  customer_name: '',
  street_address: '',
  city: '',
  zip: '',
};

function Checkout() {
  const [order, setOrder] = useState(emptyOrder);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const pizzas = useSelector(getCartItems);
  const total = useSelector(getTotalCartPrice);

  const submitOrder = (event) => {
    event.preventDefault();
    setIsPlacingOrder(true);
    const orderData = { ...order, pizzas, total };
    axios.post('/api/order', orderData).then((response) => {
      setIsPlacingOrder(false);
      setOrder(emptyOrder);
      dispatch({ type: SET_ORDER, payload: orderData });
      history.push('/thankyou');
    })

  }

  return (
    <div className="container mt-3">
      <div className="row">
        <form className="col-12 col-md-8">
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Delviery/Pickup</label>
            <select id="type" value={order.type} onChange={(event) => setOrder({ ...order, type: event.target.value })} className="form-select">
              <option value="delivery">Delivery</option>
              <option value="pickup">Pickup</option>
            </select>
          </div>
          <CheckoutInput
            value={order.customer_name}
            onChange={value => setOrder({ ...order, customer_name: value })}
            autoFill="name"
            label="Name"
          />
          <CheckoutInput
            value={order.street_address}
            onChange={value => setOrder({ ...order, street_address: value })}
            autoFill="address"
            label="Address"
          />
          <CheckoutInput
            value={order.city}
            onChange={value => setOrder({ ...order, city: value })}
            autoFill="city"
            label="City"
          />
          <CheckoutInput
            value={order.zip}
            onChange={value => setOrder({ ...order, zip: value })}
            autoFill="zip"
            label="Zip"
          />
          <button type="submit" onClick={submitOrder} className="btn btn-primary btn-block mt-3">
            Place Order
          </button>
        </form>
        <CheckoutItems />
      </div>
    </div>
  )
}

export default Checkout;
