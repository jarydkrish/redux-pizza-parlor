import { useSelector } from "react-redux";
import { getTotalCartItems } from "../../reducers/cart";

function CartIcon() {
  const totalCartItems = useSelector(getTotalCartItems);
  return (
    <div className="position-relative pr-3" style={{ height: '24px', width: '24px' }}>
      <svg className="position-absolute top-0 start-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill="white" d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
      {totalCartItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <span>{totalCartItems}</span>
        </span>
      )}
    </div>

  );
}

export default CartIcon;
