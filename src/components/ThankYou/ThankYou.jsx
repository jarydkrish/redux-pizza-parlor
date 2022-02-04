import { useSelector } from "react-redux";

import { getOrder } from "../../reducers/order";

function ThankYou() {
  const order = useSelector(getOrder);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <h1>Thank you for your order!</h1>
          <p>
            Your order number is nonexistent, because the server response is a "201 No Content".
          </p>
          <p>
            Your total is <strong>${order.total}</strong>.
          </p>
          {order.type === "delivery" ? (
            <p>
              Your order will be delivered to:
            </p>
          ) : (
            <p>
              Your order can be picked up in 30 minutes, and your address is:
            </p>
          )}

          <p>
            {order.customer_name}
          </p>
          <p>
            {order.street_address}
          </p>
          <p>
            {order.city}, {order.zip}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
