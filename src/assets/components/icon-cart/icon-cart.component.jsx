//import "./icon-cart.styles.scss"
import {CartIconComp, Image, Quantity} from "./icon-cart.styles.jsx"

import ShoppingIcon from "../../shopping-bag.svg"
import { CartContext } from "../../../contexts/cart-icon.context";
import { useContext } from "react";

const IconCart = () => {
    const {setIsClicked, quantity} = useContext(CartContext); // destructuring the object returned by useContext and use it here.
    return(
        <CartIconComp  onClick={()=> setIsClicked(prev => !prev)}>
            <Image src={ShoppingIcon}/>
            <Quantity >{quantity}</Quantity>
        </CartIconComp>
    )
}

export default IconCart;