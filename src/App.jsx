import Home from './pages/Home';
import './index.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
 
  
  return (

    <Switch>
      <Route exact path='/Ecommerce-Website' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/product' component={Product} />
      <Route exact path='/productList' component={ProductList}/>
    </Switch>
    
  );
}

export default App;
