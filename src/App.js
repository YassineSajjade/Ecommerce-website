import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            Login
          </Route>
          <Route path="/basket">
            Basket
          </Route>
          <Route path="/">
            <Navbar/>
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
