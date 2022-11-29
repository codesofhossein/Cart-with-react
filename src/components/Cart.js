import React, { useContext } from 'react';
import styles from "./Cart.module.scss";

//contexts
import { CartContext } from '../contexts/CartContextProvider';


//shared
import Cartitems from '../shared/Cartitems';
import { Link } from 'react-router-dom';

const Cart = () => {

    console.log("cart rendered");

    const { state, dispatch } = useContext(CartContext);


    return (

        <div className={styles.container}>

            <div className={styles.leftCart} style={state.itemCounter === 0 ? {display : "none"} : {display : ""}}>

             {state.itemsSelected.map(item => <Cartitems key={item.id} item={item} dispatch={dispatch} />)}
                    
            </div>


            {state.itemCounter > 0 && <div className={styles.rightCart}>

                <div>
                    <span>Total Items : <span>{state.itemCounter}</span></span>
                    <span>Total Price : <span>{state.totalPrice} $</span></span>
                </div>

                <div className={styles.btns}>
                    <Link onClick={() => dispatch({ type: "CLEAR" })} >Clear</Link>
                    <button onClick={() => dispatch({ type: "CHECKOUT" })} >Checkout</button>
                </div>
            </div>}


            {state.checkout && <div className={styles.checkout}>

                <h3>Checkout SuccessFull</h3>
                <Link to="/products">Buy More</Link>

            </div>}


            {state.itemCounter === 0 && state.checkout === false && <div className={styles.clear}>

                <h3 style={{color : "initial"}}>Cart is Empty! ...</h3>
                <Link to="/products">Go to Shop</Link>

            </div> }

        </div>
    );
};

export default Cart;