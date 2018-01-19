import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import FindShop from './components/FindShop'
import Login from './components/Login'
import Queue from './components/Queue'
import SelectMenu from './components/SelectMenu'
import Cart from './components/Cart'
import Telephone from './components/Telephone'
import OrderDetail from './components/OrderDetail'

const Background = styled.div`
  width: 100%;
  height: 100%;
`

const App = () => (
  <BrowserRouter>
    <Background>
      <Route exact path="/" component={Home} />
      <Route exact path="/find" component={FindShop} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/queue" component={Queue} />
      <Route exact path="/menu" component={SelectMenu} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/telephone" component={Telephone} />
      <Route exact path="/order/:no" component={OrderDetail} />
    </Background>
  </BrowserRouter>
)

export default App;
