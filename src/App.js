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
  const [prdToCart, setPrdToCart] = useState([]); //=> Array to store dataProducts for basket
  const [totalPrice, setTotalPrice] = useState(0); //=> Total of amount

    //Fetch data in Back-end
  const getData = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      setmyData(data.products);
    })
    .catch(err => console.log(err));
  }

    //function to handle cartCount using Context
  const toggleCartCount = () => {
    setCartCount(cartCount + 1);
  }

    //function to handle ProductsToCart using Context
  const togglePrdToCart = (newData) => {
    setPrdToCart(oldData => [...oldData,newData]);
  }

    //function to handle total of amount
  const toggleTotalPrice = (newPrdPrice) =>{
    setTotalPrice(totalPrice + newPrdPrice)
  }

    //Execute getData function
  useEffect(() => {
    getData();
  },[]);
  

  return (
    <Router>
      <div className="App">
      <DataContext.Provider value={{myData:myData, 
        cartCount:cartCount, toggleCartCount:toggleCartCount,  
        togglePrdToCart:togglePrdToCart,  prdToCart:prdToCart,  
        toggleTotalPrice:toggleTotalPrice,  totalPrice:totalPrice}}>
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
