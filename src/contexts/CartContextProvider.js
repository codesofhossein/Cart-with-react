import React, { useReducer } from 'react';

const initialState = {

    itemsSelected: [],
    itemCounter: 0,
    totalPrice: 0,
    checkout: false

}



const sumItem = (item) => {

    const itemCounter = item.reduce((total , cur)=> total + cur.quantity , 0);
    let totalPrice = item.reduce((total , cur) => total + (cur.quantity * cur.price) , 0 ).toFixed() ;

    return {itemCounter : itemCounter , totalPrice : totalPrice};
}

const reducer = (state, action) => {

    switch (action.type) {

        case "ADDITEM":

            if (!state.itemsSelected.find(item => item.id === action.peyload.id)) {

                state.itemsSelected.push({ ...action.peyload, quantity: 1 });
                state.checkout = false ;
            }
            return { ...state, itemsSelected: [...state.itemsSelected] , ...sumItem(state.itemsSelected) };


        case "REMOVEITEM":

            const newItemSelected = state.itemsSelected.filter(item => item.id !== action.peyload.id);
            return { ...state, itemsSelected: [...newItemSelected] , ...sumItem(newItemSelected) };


        case "INCREASE":

            const indexI = state.itemsSelected.findIndex(item => item.id === action.peyload.id);
            state.itemsSelected[indexI].quantity++;
            return { ...state , ...sumItem(state.itemsSelected) };

        case "DECREASE":

            const indexD = state.itemsSelected.findIndex(item => item.id === action.peyload.id);
            state.itemsSelected[indexD].quantity--;
            return { ...state , ...sumItem(state.itemsSelected) };

        case "CHECKOUT":

            return {

                itemsSelected: [],
                itemCounter: 0,
                totalPrice: 0,
                checkout: true
            };


        case "CLEAR":

            return {

                itemsSelected: [],
                itemCounter: 0,
                totalPrice: 0,
                checkout: false
            };

        default : return state ;


    }
}

export const CartContext = React.createContext();

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

  

    return (
        
        <CartContext.Provider value={{state , dispatch}}>

            {props.children}

        </CartContext.Provider>
        
    );
};

export default CartContextProvider;