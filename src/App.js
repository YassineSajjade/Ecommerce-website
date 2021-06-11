import './App.css';
import {useEffect, useState, createContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Basket from "./components/Basket";

export const DataContext = createContext();

function App() {

  const [myData, setmyData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [dataToCart, setDataToCart] = useState([]);
  // const [dataFromCart, setDataFromCart] = useState([]);

  //Fetch data in Back-end
  const getData = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      setmyData(data.products);
    })
    .catch(err => console.log(err));
  }

  
  useEffect(() => {
    getData();
  },[]);

    // callback function to handle data from childs
    const handleCallback = (cartCount, prdToCartO) =>{
      setCartCount(cartCount);
      setDataToCart(prdToCartO);
    }
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <DataContext.Provider value={{myData:myData, cartCount:cartCount}}>
            <Route path="/login">
              Login
            </Route>
            <Route path="/basket">
              <Basket parentCallBackApp={handleCallback} dataToCartP={dataToCart} />
            </Route>
            <Route path="/">
              <Home parentCallBackApp={handleCallback}/>
            </Route>
          </DataContext.Provider>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
