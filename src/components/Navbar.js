import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';


//assets
import cartIcon from '../assets/images/cart.png';
import logo from '../assets/images/logo.png';

//contexts
import { CartContext } from '../contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);
   

    return (

        <div className={styles.container}>

            <div className={styles.navContainer}>


                <div className={styles.leftNav}>

                    <Link to="/products" className={styles.product}>Products</Link>

                    <div>

                        <Link to="/cart"><img src={cartIcon} alt="cartIcon" /></Link>
                        <div className={styles.counter}><span>{state.itemCounter}</span></div>
                        

                    </div>

                    <p>Total: {state.totalPrice} $</p>

                </div>


                <Link to="/"><img src={logo} alt="logo" className={styles.mainLogo} /></Link>

            </div>

        </div>
    );
};

export default Navbar;