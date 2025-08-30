// import styling sheet
import "./checkout-card.styles.scss"

// import method from libraries
import {useContext} from "react";

// use here the context to increment the quantity of the selected item !
import {CartContext} from "../../../contexts/cart-icon.context.jsx";

const CheckOutCard = ({info:{name, imageUrl, quantity, price, id}}) => {
    const {addItemToCart,removeItemToCart, deleteItemToCart} = useContext(CartContext);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <button onClick={() => removeItemToCart({id})}><i className="fa-solid fa-chevron-left"></i></button>
                {quantity}
                <button onClick={() => addItemToCart({id})}><i className="fa-solid fa-chevron-right"></i></button>
            </span>
            <span className="price">${quantity*price}</span>
            <div className="remove-button"><button onClick={()=>deleteItemToCart({id})} ><i className="fa-solid fa-trash-can"></i></button></div>
        </div>
    )
};

export  default  CheckOutCard