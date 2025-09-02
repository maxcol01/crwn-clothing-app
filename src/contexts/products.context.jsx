import { createContext, useState, useEffect} from "react";
import {addCollectionAndDocuments} from "../assets/utils/firebase/firebase.js";

{/* initial Value for the context (right now mock up but later useEffect)*/}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext(
    {
        products:[],
        setProducts: () => null
    }
);

{/* Provider */}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]); // the default value is the
    const value = {products, setProducts}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}