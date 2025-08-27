import CheckOutCard from "../../components/checkout-card.jsx/checkout-card.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";
import {ProductsContext} from "../../../contexts/products.context.jsx";

const CheckOutRoute = () => {
    const {products} = useContext(ProductsContext);
    console.log(products)
    const {cartItems} = useContext(CartContext);
    return(
        <div>
            {cartItems.map(({id, name, imageUrl, quantity, price}) => (
                <div key={id} className="selection-container">
                    <hr/>
                    <div className="selection-information">
                        <h1>{name}</h1>
                        <img src={imageUrl} alt={name}/>
                        <h2>{quantity}<i className="fa-solid fa-xmark"></i>${price} = ${quantity*price}</h2>
                    </div>
                    <div className="selection-interaction">
                        <span>
                            <button><i className="fa-solid fa-chevron-left"></i></button>
                            {quantity}
                            <button><i className="fa-solid fa-chevron-right"></i></button>
                        </span>
                        <span>
                            <button><i className="fa-solid fa-trash-can"></i></button>
                        </span>
                    </div>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default CheckOutRoute;

