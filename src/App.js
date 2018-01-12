import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import FindShop from './components/FindShop'
import Payment from './components/Payment'
import Queue from './components/Queue'
import SelectMenu from './components/SelectMenu'
import Cart from './components/Cart'
import Telephone from './components/Telephone'
import OrderDetail from './components/OrderDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/find" component={FindShop} />
          <Route exact path="/pay" component={Payment} />
          <Route exact path="/queue" component={Queue} />
          <Route exact path="/menu" component={SelectMenu} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/telephone" component={Telephone} />
          <Route exact path="/order/:no" component={OrderDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
