
import React, {useContext} from 'react'
import ShoppingContext from "../Context/Shopping/ShoppingContext";
import "./CheckOutProducts.css";

const CheckOutProducts = ({id, image, title, ratings, price, hideButton}) => {

  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_products">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_products">{title}</p>
        <div className="checkout_product_ratings">
          {Array(ratings)
          .fill()
          .map((_, i) => (
          <p key={i}>⭐</p>
          ))}
       </div>
       <p className="checkout_product_price">
          <small>R</small>
          <strong>{price}</strong>
          </p>
          {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
          )}
      </div>
      
    </div>
  )
}

export default CheckOutProducts;
