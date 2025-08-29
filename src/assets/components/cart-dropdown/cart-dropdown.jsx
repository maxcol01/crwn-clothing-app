import "./cart-dropdown.styles.scss"
import Button from "../button/button";
import CartItem from "../cart-item/cart-items.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {useNavigate} from "react-router";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const handleNavigation = ()=> navigate("checkout")
    return (

        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div >
            <Button onClick={handleNavigation}>Checkout</Button>
        </div>
        
    );

}

export default CartDropDown;