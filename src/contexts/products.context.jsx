import { createContext, useState} from "react";
import SHOP_DATA from "../shop-data.json"

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
    const [products, setProducts] = useState(SHOP_DATA); // the default value is the 
    const value = {products, setProducts}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}