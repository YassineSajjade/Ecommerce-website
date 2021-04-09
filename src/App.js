import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Basket from "./components/Basket";

function App() {

  // fetch('localhost:5000/products')
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  return (
    <Router>
      <div className="App">
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
        
      </div>
    </Router>

  );
}

export default App;
