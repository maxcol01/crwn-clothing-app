import CheckOutCard from "../../components/checkout-card.jsx/checkout-card.component.jsx";
import TotalCheckOut from "../../components/total-checkout/total-checkout.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import "./checkout.styles.scss"

const CheckOutRoute = () => {

    const {cartItems} = useContext(CartContext);
    return(
        <div>
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckOutCard key={cartItem.id} info={cartItem}/>
            ))}
            <TotalCheckOut/>
        </div>
    )
}

export default CheckOutRoute;

