import React, {useContext, useEffect, useState} from "react";
import "./Payment.css";
import {Link, useHistory} from "react-router-dom";
import CheckOutProducts from './CheckOutProducts';
import ShoppingContext from '../Context/Shopping/ShoppingContext';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CurrencyFormat from "react-currency-format";


const Payment = () => {

    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

    const history = useHistory();
    const stripe = useStripe();
    const elements =useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);
    
useEffect (() => {

const getClientSecret = async () => {
    const response = await axios({
        method:"post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
    });
    setClientSecret(response.data.clientSecret);
};
getClientSecret();
},[basket]);

console.log("The secret is =>", clientSecret);

const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: 
        {card: elements.getElement(CardElement)},
    }).then(({paymentIntent})=>{
        //Payment intent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.push("/orders")
    })
};

const handleChange =(e)=>{
    setDisabled(e.empty);
 setError(e.error? "e.error.message": "")
};
 
  return (
      <>
    <div className="payment">
        <div className="payment_container">
        <h1>Checkout <Link to="/checkout">{basket?.length} items </Link></h1>
        </div>
      <div className="payment_selection">
          <div className="payment_title">
              <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 ReactJS Road</p>
              <p>Cape Town, SA</p>
          </div>
      </div>
      <div className='payment_selection'>
          <div className='payment_title'>
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
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
          <div className='payment_selection'>
             <div className='payment_title'>
                <h3>Payment Method</h3>
              </div>
              <div className='payment_details'>
                  {/*Stripe code will go here */}
                  <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange}/>
                      <div className="payment_price_container">
                          <CurrencyFormat 
                          renderText={(value)=> 
                          <h3>Order Total:{value}</h3>}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"R"} 
                          />
                          <button disabled = {processing || disabled || succeeded}>
                          <span>{processing?<p>processing</p>:"Buy Now"}</span></button>
                      </div>
                            {error && <div>{error}</div>}
                  </form>
              </div>
          </div>
    </div>
    </>
  )
}

export default Payment;
