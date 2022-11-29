import React from "react";

//Components
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

//Contexts
import ProductsContext from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContextProvider";

import ProductDetails from "./components/ProductDetails";
import { Route, Routes, Navigate } from "react-router-dom";


const App = () => {

  console.log("App rendered");
  return (
    <>
      <ProductsContext>
        <CartContextProvider>

          <Navbar />
          <div>

            <Routes>

              <Route path="/products" element={<Store />} />
              <Route path="/*" element={<Navigate to="/products" />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />


            </Routes>

          </div>

        </CartContextProvider>
      </ProductsContext>

      <p style={{color: "silver" , backgroundColor : "#fff" , margin : "1rem auto" , textAlign : "center" , width : "fit-content" , padding : "5px 15px" , borderRadius : "18px" }}>Made by @Hossein</p>
    </>

  );
}

export default App;
