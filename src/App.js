import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './header/header';
import Home from './home/home';
import About from './about/about'
import Products from './product/product';
import ProductDetails from "./product/productDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/details/:id" exact component={ProductDetails}/>
         {/*  <Route path="details/:id" exact component={ProductDetails}/> */}
        </Switch>
      </Router>
    </>

  );
}

export default App;
