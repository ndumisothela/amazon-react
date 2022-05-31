import { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import { ShoppingReducer } from "./ShoppingReducer";

export const ShoppingState = (props) => {
    const initialState ={basket:[],user: null };
    const [state, dispatch] = useReducer(ShoppingReducer, initialState);

    //selectors
const getBasketTotal = (basket)=>
    basket?.reduce((amount, item) => item.price + amount, 0);

    const addToBasket = async ({ item }) => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: item
        });
    };
    const emptyBasket =()=> {
        dispatch({
            type: "EMPTY_BASKET"
        });
    };
    const removeFromBasket = (item) => {
        dispatch({
            type: "REMOVE_FROM_BASKE",
        payload: item
    });
    };
    const setUser = (user) => {
     console.log("User payload", user);
        dispatch({
            type: "SET_USER",
            payload: user
        })
    }

    return (
    <ShoppingContext.Provider 
        value={{
            basket: state.basket, 
            user: state.user,
            getBasketTotal,
            addToBasket,
            setUser,
            removeFromBasket,
            emptyBasket
        }}
    >  
        {props.children}
     </ShoppingContext.Provider>
     );
};