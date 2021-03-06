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

  
  const [myData, setmyData]         = useState([]); //=> Array for store my data from Back-end
  const [cartCount, setCartCount]   = useState(0);  //=>  cart count for basket 
  const [prdToCart, setPrdToCart]   = useState([]); //=> Array to store dataProducts for basket
  const [totalPrice, setTotalPrice] = useState(0); //=> Total of amount

    //Fetch data in Back-end
  // const getData = () => {
  //   fetch('http://localhost:5000/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     setmyData(data.products);
  //   })
  //   .catch(err => console.log(err));
  // }
    //Fetch data in Back-end
  const getData = () => {
    fetch('https://e-commercebackend.000webhostapp.com/test.php')
    .then(res => res.json())
    .then(data => {
      setmyData(data);
    })
    .catch(err => console.log(err));
  }

    //function to handle adding to cartCount using Context
  const toggleCartCount = () => {
    setCartCount(cartCount + 1);
  }

    //function to handle removing from cartCount using Context
  const toggleMinusCartCount = () => {
    setCartCount(cartCount - 1);
  }

    //function to handle adding product to array ProductsToCart using Context
  const togglePrdToCart = (newData) => {
    setPrdToCart(oldData => [...oldData,newData]);
  }

    //function to handle updating the array ProductsFromCart using Context
  const togglePrdFromCart = (newArray) => {
    setPrdToCart(newArray);
  }

    //function to handle adding productPrice to total of amount
  const toggleTotalPrice = (newPrdPrice) =>{
    setTotalPrice(parseFloat(totalPrice) + parseFloat(newPrdPrice));
  }

    //function to handle removing productPrice for total of amount
  const toggleMinusTotalPrice = (PrdPrice) =>{
    setTotalPrice(totalPrice - PrdPrice)
  }

    //function to add QTY
  const toggleAddQty = (itemId) => {
    myData.map(  item => {
      if(item.id === itemId){
        item.qty = item.qty + 1;
        setTotalPrice(totalPrice + item.prix);
      }
    } );
  }

    //function to minus QTY
  const toggleMinusQty = (itemId) => {
    myData.map(  item => {
      if(item.id === itemId){
        if(item.qty <= 1){
          item.qty = 1;
        }else{
          item.qty = item.qty - 1;
          setTotalPrice(totalPrice - item.prix);
        }
      }
    } );
  }
    
    //Execute getData function
  useEffect(() => {
    getData();
  },[prdToCart]);

  
  // useEffect(()=>{

  //   const cartC = localStorage.getItem('cartCount');
  //   if(cartC){
  //     setCartCount( parseInt(cartC) );
  //   }

  //   const data = localStorage.getItem('prdsToCart');
  //   if(data){
  //     setPrdToCart(JSON.parse(data))
  //    }
  //   },[]);

  //   useEffect(() => {
  //     localStorage.setItem('prdsToCart', JSON.stringify(prdToCart));
  //     localStorage.setItem('cartCount', cartCount);
      
  // })
  

  return (
    <Router>
      <div className="App">
      <DataContext.Provider value={{myData:myData, 
        cartCount:cartCount, toggleCartCount:toggleCartCount,  
        togglePrdToCart:togglePrdToCart,  prdToCart:prdToCart,  
        toggleTotalPrice:toggleTotalPrice,  totalPrice:totalPrice,
        togglePrdFromCart:togglePrdFromCart, toggleMinusCartCount:toggleMinusCartCount, toggleMinusTotalPrice:toggleMinusTotalPrice,
        toggleAddQty:toggleAddQty, toggleMinusQty:toggleMinusQty}}>

        <Switch>
          
            <Route path="/login">
              Login
            </Route>
            <Route path="/basket">
              <Basket/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          
        </Switch>

        </DataContext.Provider>
      </div>
    </Router>

  );
}

export default App;
