import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import CheckoutInput from './CheckoutInput';
import CheckoutItems from './CheckoutItems';

const emptyOrder = {
  customer_name: '',
  street_address: '',
  city: '',
  zip: '',
};

function Checkout() {
  const [order, setOrder] = useState(emptyOrder);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const history = useHistory();

  const submitOrder = async () => {
    setIsPlacingOrder(true);
    axios.post('/api/order', )

  }

  return (
    <div className="container mt-3">
      <div className="row">
        <form className="col-12 col-md-8">
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
          <button onClick={submitOrder} className="btn btn-primary btn-block mt-3">
            Place Order
          </button>
        </form>
        <CheckoutItems />
      </div>
    </div>
  )
}

export default Checkout;
