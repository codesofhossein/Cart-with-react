import React, { useContext } from 'react';
import styles from "../shared/Product.module.scss" ;

import { Link } from 'react-router-dom';

//helper
import {shorterTitle} from "../helper/functions";
import { isInCart } from '../helper/functions';
import { checkQuantity } from '../helper/functions';

//Context
import { CartContext } from '../contexts/CartContextProvider';


//icon
import trashIcon from "../assets/images/trash.svg";



const Product = (props) => {

    const {products} = props ;

    const {state , dispatch} = useContext(CartContext);
   
    console.log("product rendered");
    return (

        <>
            <div className={styles.cardContainer}>

                <Link to={`/products/${products.id}`}><img src={products.image} alt="picCard" /></Link>
                <h3>{shorterTitle(products.title)}</h3>
                <p className={styles.price}>{products.price} $</p>

                <div className={styles.infoContainer}>

                    <Link to={`/products/${products.id}`} className={styles.detail}>Details</Link>

                    <div className={styles.buttons}>

                        {checkQuantity(state , products.id) === 1 && <button className={styles.trashBtn} onClick={()=> dispatch({type :"REMOVEITEM" , peyload : products})}><img src={trashIcon} style={{width : "20px" , height : "20px" , display : "inline-flex"}} alt="icon" /></button> }
                        {checkQuantity(state , products.id) > 1 && <button className={styles.kamBtn} onClick={() => dispatch({type : "DECREASE" , peyload : products})}>-</button> }
                        {checkQuantity(state , products.id) > 0 && <span className={styles.quantityShow}>{checkQuantity(state , products.id)}</span>}
                        {
                            
                            isInCart(state , products.id) ?
                            
                            <>
                            <button className={styles.plusBtn} onClick={() => dispatch({type : "INCREASE" , peyload : products})}>+</button>
                            <p>{console.log(state.itemsSelected[products.id])}</p>
                            </>
                            
                            :  
                            <button onClick={() => dispatch({type : "ADDITEM" , peyload : products})}>Add to Cart</button> 
                            
                        }
                         
                    </div>

                </div>

            </div>
     
                    
        </>
    );
};

export default Product;