import {initializeApp} from "firebase/app";
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {getFirestore, doc, getDoc,setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADzCzOuQYYtj1ZObifm_HHzEnPa60YDtE",
  authDomain: "cran-clothing-db.firebaseapp.com",
  projectId: "cran-clothing-db",
  storageBucket: "cran-clothing-db.firebasestorage.app",
  messagingSenderId: "946109737779",
  appId: "1:946109737779:web:f1a21fe531045665566c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth(app);
export const signinWithGooglePopup = () => signInWithPopup(auth, provider)
export const signinWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db, "users", userAuth.uid); // because we have a uid returned when we login using Google popup
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log(error)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    {/* Careful with the naming of the functions -> turned out to be not clear */}
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email && !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth); // auth inform the firebase which user to sign out because auth is what allows keeping track of which user is signed in. 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)