import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../assets/utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../assets/utils/firebase/firebase";
// as the actual value we want to access = initial value (default not necessarly the first value)

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    "SET_CURRENT_USER":"SET_CURRENT_USER"
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type}`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const {currentUser} = state;
    const setCurrentUser = (user) => {
	    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER , payload: user})
    }
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

