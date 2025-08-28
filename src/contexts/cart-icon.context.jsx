import {useState, createContext, useEffect} from "react";


const addCartItem = (cartItems, productToAdd) => {

  const found = cartItems.find(item => item.id === productToAdd.id);

  if (found) {
    // Map through and update quantity
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];

};

const removeCartItem = (cartItems, productToRemove) => {

  const found = cartItems.find(item => item.id === productToRemove.id);

  if (found) {
    // Map through and update quantity
    return cartItems.map(item =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return [...cartItems, { ...productToRemove, quantity: 1 }];

};

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem)=> cartItem.id !== productToDelete.id)
}

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

    useEffect(()=>{
        setQuantity(()=>{
            return cartItems.reduce((acc, cartItem) => {
               return acc + cartItem.quantity
            },0)
        })
    }, [cartItems])

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (productToRemove)=>{
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteItemToCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    const value = {
        isClicked,
        setIsClicked,
        cartItems,
        setCartItems,
        addItemToCart,
        quantity,
        setQuantity,
        removeItemToCart,
        deleteItemToCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}