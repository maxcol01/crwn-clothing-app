import "./product-card.style.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart-icon.context.jsx";


const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}></img>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={()=>addItemToCart(product)}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;