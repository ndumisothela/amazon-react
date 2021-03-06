import React,{useContext} from 'react';
import "./Checkout.css";
import ShoppingContext from "../Context/Shopping/ShoppingContext"
import CheckOutProducts from './CheckOutProducts';
import Subtotal from "./Subtotal";

const Checkout = () => {

    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = shoppingContext;

  return (
<div className="checkout">
     <div className="checkout_left">
            <img 
            className="checkout_ad"
             src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
             alt=""
             />
        
         <div>
            <h3>HELLO,{user?.email}</h3>
            <h2 className="checkout_title">Your shopping Basket</h2>

             {basket.map((item) => (
             <CheckOutProducts 
             key={item.id}
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             ratings={item.ratings}
           />
          ))}
         </div>
    </div>
    <div className='checkout_right'>
    <Subtotal />
    </div>
</div>
  );
};

export default Checkout;
