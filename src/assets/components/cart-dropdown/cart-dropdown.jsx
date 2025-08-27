import "./cart-dropdown.styles.scss"
import Button from "../button/button";
import CartItem from "../cart-item/cart-items.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {Link} from "react-router";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    return (

        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div >
            <Link to={"checkout"}>
                <Button >Checkout</Button>
            </Link>
        </div>
        
    );

}

export default CartDropDown;