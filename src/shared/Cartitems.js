import React from 'react';
import styles from "./Cartitems.module.scss" ;
import { Link } from 'react-router-dom';

//icons
import trashIcon from "..//assets/images/trash.svg";

//helper
import { shorterTitle } from '../helper/functions';

const Cartitems = (props) => {

        const {item , dispatch} = props ;
    return (

        <div className={styles.cartItems}>

            <Link to={`/products/${item.id}`}><img src={item.image} alt="cartPic" className={styles.mainPic} /></Link>

            <div className={styles.data}>

                <span>{shorterTitle(item.title)}</span>
                <span>{item.price} $</span>

            </div>


            <span className={styles.quantity}>{item.quantity}</span>

            <div className={styles.buttons}>

                {item.quantity === 1 && <button onClick={() => dispatch({ type: "REMOVEITEM", peyload: item })}><img src={trashIcon} style={{ width: "20px", height: "25px" }} alt="icon" /></button>}
                {item.quantity > 1 && <button onClick={() => dispatch({ type: "DECREASE", peyload: item })}>-</button>}

                <button className={styles.plusBtn} onClick={() => dispatch({ type: "INCREASE", peyload: item })}>+</button>

            </div>


        </div>
    );
};

export default Cartitems;