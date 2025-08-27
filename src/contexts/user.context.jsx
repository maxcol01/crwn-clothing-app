import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../assets/utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../assets/utils/firebase/firebase";
// as the actual value we want to access = initial value (default not necessarly the first value)

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
    })

    return unsubscribe
},[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// example
//<UserProvider>
//    <app/>
//</UserProvider>