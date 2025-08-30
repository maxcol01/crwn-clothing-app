import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {useContext} from "react";

const TotalCheckOut = () => {
    const {total} = useContext(CartContext);
    return(
        <div className="total">
            Total: ${total}
        </div>
    )
};

export default TotalCheckOut;