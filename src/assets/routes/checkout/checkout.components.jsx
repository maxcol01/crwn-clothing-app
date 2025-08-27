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
                <div key={id}>
                    <hr/>
                    <h1>{name}</h1>
                    <img src={imageUrl} alt={name}/>
                    <h2>{quantity}x ${price}</h2>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default CheckOutRoute;

