import { createContext, useState, useEffect} from "react";
import {getCategoriesAndDocuments} from "../assets/utils/firebase/firebase.js";

{/* initial Value for the context (right now mock up but later useEffect)*/}

// eslint-disable-next-line react-refresh/only-export-components
export const CategoriesContext = createContext(
    {
        categoriesMap:{},
    }
);

{/* Provider */}

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({}); // the default value is the
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
            console.log(categoryMap)
        };
        getCategoriesMap()
    }, []);
    const value = {categoriesMap,
        setCategoriesMap,
    }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}