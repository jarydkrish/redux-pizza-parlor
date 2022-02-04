import React from 'react';
import { Link, Route, Switch,  } from 'react-router-dom';

import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import PizzaList from '../PizzaList/PizzaList';
import CartIcon from './CartIcon';

function App() {
  return (
    <div className='App'>
      <header className="sticky-top">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand">Pizza Builder</Link>
            <Link to='/cart' className="navbar-brand">
              <CartIcon />
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={PizzaList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
