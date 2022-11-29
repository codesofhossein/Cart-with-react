import Product from "../shared/product";

const shorterTitle = (title , count = 2) => {

    const splitTitle = title.split(" ");

    let newTitle ;
    
    if (count === 2) newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
    if (count === 3) newTitle = `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`;

    return newTitle;
}


const isInCart = (state, id) => {

    const index = !!state.itemsSelected.find(item => item.id === id);
    return index;
}


const checkQuantity = (state, id) => {

    const index = state.itemsSelected.findIndex(item => item.id === id);

    if (index === -1) return false;
    else {

        return state.itemsSelected[index].quantity ;
        
    }
    
}


export { shorterTitle, isInCart, checkQuantity };