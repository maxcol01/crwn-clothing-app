import {createContext, useEffect, useReducer} from "react";

// for improvement, we might need to merge this function into one !
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
  if (found.quantity > 1) {
    // Map through and update quantity
    return cartItems.map(item =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return deleteCartItem(cartItems, productToRemove);
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
    quantity: 0,
    removeItemToCart: ()=>{},
    deleteItemToCart: ()=>{},
    total: 0,
    setTotal: ()=>{}
})

{/* Initialize the action types object*/}
// eslint-disable-next-line react-refresh/only-export-components
export const CART_ACTION_TYPES = {
    SET_IS_CLICKED: "SET_IS_CLICKED",
    SET_CART_ITEM: "SET_CART_ITEM",
    SET_QUANTITY: "SET_QUANTITY",
    SET_TOTAL: "SET_TOTAL"
}


{/*Initialize the reducer*/}
const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type){
        case CART_ACTION_TYPES.SET_IS_CLICKED:
            return {
                ...state,
                isClicked:payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return {
                ...state,
                cartItems:payload
            }
        case CART_ACTION_TYPES.SET_QUANTITY:
            return {
                ...state,
                quantity:payload
            }
        case CART_ACTION_TYPES.SET_TOTAL:
            return {
                ...state,
                total:payload
            }
        default:
            throw new Error(`Unhandled type ${type}`)
    }
}

{/* Initialize the state*/}
const INITIAL_STATE = {
    isClicked: false,
    cartItems: [],
    quantity: 0,
    total: 0
}

{/* Create the Provider */}

export const CartContextProvider = ({children})=>{

    //const  [total, setTotal] = useState(0);

    {/* Access the reducer information and ready for update*/}
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    {/* Defining the state variables*/}
    const {isClicked, cartItems, quantity, total} = state;

    const setIsClicked = () =>{
        dispatch({type:CART_ACTION_TYPES.SET_IS_CLICKED, payload:!isClicked})
    }

    useEffect(()=>{
        const quantity = cartItems.reduce((acc, cartItem) => {
               return acc + cartItem.quantity
            },0)
        dispatch({type:CART_ACTION_TYPES.SET_QUANTITY, payload:quantity})
        },[cartItems])

   useEffect(()=>{
       const totalCart = cartItems.reduce((acc, cartItem) => {
                 return acc + (cartItem.quantity*cartItem.price)
             },0)
       dispatch({type:CART_ACTION_TYPES.SET_TOTAL, payload:totalCart()})
        }, [cartItems])


    const updateCartItems = (newItems) => {
      dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEM, payload: newItems });
    };

    const addItemToCart = (productToAdd) => {
      updateCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemToCart = (productToRemove) => {
      updateCartItems(removeCartItem(cartItems, productToRemove));
    };

    const deleteItemToCart = (productToDelete) => {
      updateCartItems(deleteCartItem(cartItems, productToDelete));
    };


    const value = {
        isClicked,
        setIsClicked,
        cartItems,
        addItemToCart,
        quantity,
        removeItemToCart,
        deleteItemToCart,
        total,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}