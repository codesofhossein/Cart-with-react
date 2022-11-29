import React, { useContext, useEffect, useState } from 'react';
import styles from "./Store.module.scss";

//contexts
import { contextProduct } from '../contexts/ProductsContext';


//shared
import Product from '../shared/product';
import Loading from '../shared/Loading';


const Store = () => {

    const products = useContext(contextProduct);

    console.log("store rendered");
    return (

        products.length ? <div className={styles.container}>

            {products.map(item => <Product key={item.id} products={item} />)}


        </div> : <Loading />
    );
};

export default Store;