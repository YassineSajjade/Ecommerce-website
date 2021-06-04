import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Basket from "./components/Basket";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [dataToCart, setDataToCart] = useState([]);

    // callback function to handle data from childs
    const handleCallback = (cartCount, prdToCartO) =>{
      setCartCount(cartCount);
      setDataToCart(prdToCartO);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            Login
          </Route>
          <Route path="/basket">
            <Basket cartCounApp={cartCount} parentCallBackApp={handleCallback}/>
          </Route>
          <Route path="/">
            <Home cartCounApp={cartCount} parentCallBackApp={handleCallback}/>
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
