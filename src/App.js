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

  
  const [myData, setmyData] = useState([]); //=> Array for store my data from Back-end
  const [cartCount, setCartCount] = useState(0);  //=>  cart count for basket 
  // const [dataToCart, setDataToCart] = useState([]);
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

  const toggleCartCount = () => {
    setCartCount(cartCount + 1);
  }

    //Execute getData function
  useEffect(() => {
    getData();
  },[]);

    // callback function to handle data from childs
    // const handleCallback = (cartCount, prdToCartO) =>{
    //   setCartCount(cartCount);
    //   setDataToCart(prdToCartO);
    // }
  

  return (
    <Router>
      <div className="App">
      <DataContext.Provider value={{myData:myData, cartCount:cartCount, toggleCartCount:toggleCartCount}}>
        <Switch>
          
            <Route path="/login">
              Login
            </Route>
            <Route path="/basket">
              <Basket/>
              {/* <Basket parentCallBackApp={handleCallback} dataToCartP={dataToCart} /> */}
            </Route>
            <Route path="/">
              <Home/>
              {/* <Home parentCallBackApp={handleCallback}/> */}
            </Route>
          
        </Switch>
        </DataContext.Provider>
      </div>
    </Router>

  );
}

export default App;
