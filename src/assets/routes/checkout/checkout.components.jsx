import CheckOutCard from "../../components/checkout-card.jsx/checkout-card.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";


const CheckOutRoute = () => {

    const {cartItems} = useContext(CartContext);
    return(
        <div>
            {cartItems.map((cartItem) => (
                <CheckOutCard key={cartItem.id} info={cartItem}/>
            ))}
        </div>
    )
}

export default CheckOutRoute;

