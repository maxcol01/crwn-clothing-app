import { useState, createContext} from "react";


const addCartItem = (cartItems, productToAdd) => {

  const found = cartItems.find(item => item.id === productToAdd.id);

  if (found) {
    // Map through and update quantity
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    // Add new item with quantity = 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

{/* Create the context */}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
    isClicked : false,
    setIsClicked : ()=> {},
    cartItems: [],
    addItemToCart: ()=>{},
    quantity: 0
})

{/* Create the Provider */}

export const CartContextProvider = ({children})=>{
    const [isClicked, setIsClicked] = useState(false); // empty state at the beginning
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
        setQuantity( prev => prev+1)
    }

    const value = {
        isClicked,
        setIsClicked,
        cartItems,
        setCartItems,
        addItemToCart,
        quantity,
        setQuantity
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}