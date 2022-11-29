import axios from "axios";

const BaseURL = "https://fakestoreapi.com" ;

const getProducts = async () => {

    const response = await axios.get(`${BaseURL}/products`);
    return response.data ;
   
}


   

export {getProducts} ;