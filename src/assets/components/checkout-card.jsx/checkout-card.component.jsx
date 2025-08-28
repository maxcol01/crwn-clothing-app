// import styling sheet
import "./checkout-card.styles.scss"

// import method from libraries
import {useContext} from "react";

// use here the context to increment the quantity of the selected item !
import {CartContext} from "../../../contexts/cart-icon.context.jsx";

const CheckOutCard = ({info:{name, imageUrl, quantity, price, id}}) => {
    const {addItemToCart,removeItemToCart, deleteItemToCart} = useContext(CartContext);
    return (
        <div className="selection-container">
            <hr/>
            <div className="selection-information">
                <h1>{name}</h1>
                <img src={imageUrl} alt={name}/>
                <h2>{quantity}<i className="fa-solid fa-xmark"></i>${price} = ${quantity*price}</h2>
            </div>
            <div className="selection-interaction">
                <span>
                    <button onClick={()=>removeItemToCart({name, imageUrl, quantity, price, id})}><i className="fa-solid fa-chevron-left"></i></button>
                    {quantity}
                    <button onClick={()=>addItemToCart({name, imageUrl, quantity, price, id})}><i className="fa-solid fa-chevron-right"></i></button>
                </span>
                <span>
                    <button onClick={()=>deleteItemToCart({name, imageUrl, quantity, price, id})} ><i className="fa-solid fa-trash-can"></i></button>
                </span>
            </div>
            <hr/>
        </div>
    )
};

export  default  CheckOutCard