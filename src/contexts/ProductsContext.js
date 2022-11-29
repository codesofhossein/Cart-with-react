import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';


export const contextProduct = React.createContext();

const ProductsContext = (props) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchApi = async () => {

            setProducts(await getProducts());
        }

        fetchApi();

    }, [])

    return (
        <>

            <contextProduct.Provider value={products}>

                {props.children}

            </contextProduct.Provider>

        </>
    );
};

export default ProductsContext;