
import './App.css';
import "./index.css";
import { useContext,useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Layout/Header';
import ProductDetails from './Components/ProductDetails';
import { Redirect } from 'react-router-dom';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import { auth } from './Firebase';
import ShoppingContext from './Context/Shopping/ShoppingContext';
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders"


const promise  = loadStripe( );

const App = () => {

  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;



  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is ->", authUser);

      if(authUser) {
        setUser(authUser)
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        <Route path="/home">
       <Home/>
     </Route>
       <Route path = "/products" exact>
         <Products/>
         </Route>
         <Route path="/products/:id">
           <ProductDetails/>
         </Route>
         <Route path="/checkout">
           <Checkout />
           </Route>
           <Route path="/payment">
             <Elements stripe={promise}>
             <Payment />
             </Elements>
           </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="*">
           <NotFound/>
         </Route>

        </Switch>
      
      </main>   
    </>
  );
}

export default App;
