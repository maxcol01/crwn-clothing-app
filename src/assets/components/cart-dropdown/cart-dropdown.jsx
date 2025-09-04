import "./cart-dropdown.styles.scss"
import Button from "../button/button";
import CartItem from "../cart-item/cart-items.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {useNavigate} from "react-router";
import {CartDropContainer, CartItems ,EmptyMessage} from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const handleNavigation = ()=> navigate("checkout")
    return (

        <CartDropContainer>
            <CartItems className="cart-items">
                {cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>): <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItems >
            <Button onClick={handleNavigation}>Checkout</Button>
        </CartDropContainer>
        
    );

}

export default CartDropDown;