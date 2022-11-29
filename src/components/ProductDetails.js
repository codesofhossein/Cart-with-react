import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ProductDetails.module.scss";

//contexts
import { contextProduct } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContextProvider';

//helper 
import { isInCart } from '../helper/functions';
import { checkQuantity } from '../helper/functions';
import { shorterTitle } from '../helper/functions';

const ProductDetails = () => {


    const params = useParams();
    const id = params.id;


    const products = useContext(contextProduct);
    const newProducts = products[id - 1];
    
    const {state , dispatch} = useContext(CartContext);
    
  

    const addHandler = () => {

        isInCart(state , newProducts.id) ?  dispatch({type : "INCREASE" , peyload : newProducts}) 
        :
        dispatch ({type : "ADDITEM" , peyload : newProducts}) ;
    }


    return (


        <>

            {products.length ?

                <div className={styles.DetailContainer}>

                    <div className={styles.title}>

                        <h1 className={styles.header}>{shorterTitle(newProducts.title , 3)}</h1>
                        <span>Category / {newProducts.category}</span>
                    </div>

                    <div className={styles.info}>

                        <img src={newProducts.image} alt="picsProducs" className={styles.mainPic} />

                        <div className={styles.description}>

                            <div className={styles.topDes}>

                                <div className={styles.des}>
                                    <span className={styles.labelDes}>description</span>
                                    <p>{newProducts.description}</p>
                                </div>


                                <div className={styles.price}>

                                    <span >Price:</span>
                                    <span>{newProducts.price} $</span>

                                </div>
                            </div>

                            <div className={styles.bottomDes}>

                                <div>
                                    {checkQuantity(state , newProducts.id) && <span className={styles.showQuantity}>{checkQuantity(state , newProducts.id)}</span>}
                                    <button onClick={addHandler} className={styles.backBtn}>{isInCart(state , newProducts.id) ? "Plus to Cart +" : "Add to Cart"}</button>
                                </div>


                            </div>


                        </div>

                    </div>

                </div> : <h1 style={{ width: "fit-content", margin: "140px auto" }}>Loading ...</h1>}

        </>


    );
};

export default ProductDetails;