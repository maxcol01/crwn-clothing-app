import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {useContext} from "react";

const TotalCheckOut = () => {
    const {total} = useContext(CartContext);
    return(
        <div>
            ${total}
        </div>
    )
};

export default TotalCheckOut;