import "./icon-cart.styles.scss"
import ShoppingIcon from "../../shopping-bag.svg"
import { CartContext } from "../../../contexts/cart-icon.context";
import { useContext } from "react";

const IconCart = () => {
    const {setIsClicked, quantity} = useContext(CartContext); // destructuring the object returned by useContext and use it here.
    return(
        <div className="cart-icon-container" onClick={()=> setIsClicked(prev => !prev)}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <span className="item-count">{quantity}</span>
        </div>
    )
}

export default IconCart;