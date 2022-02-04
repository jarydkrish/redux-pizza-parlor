import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_PIZZAS } from '../../constants/pizzas';
import { getPizzas } from '../../reducers/pizzas';
import PizzaListItem from './PIzzaListItem';

function PizzaList() {
  const pizzas = useSelector(getPizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Pizza Parlor';
    axios.get('/api/pizza').then((response) => {
      dispatch({
        type: SET_PIZZAS,
        payload: response.data
      });
    })
  }, []);

  return (
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {pizzas.map(pizza => (
          <PizzaListItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
