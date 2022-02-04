import { useDispatch } from 'react-redux';
import { ADD_PIZZA_TO_CART } from '../../constants/cart';

function PizzaListItem({ pizza }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: ADD_PIZZA_TO_CART,
      payload: pizza.id,
    });
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={pizza.image_path} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            <p className="card-text">${pizza.price}</p>
          </div>
          <button className="btn btn-primary" onClick={addToCart}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaListItem;
