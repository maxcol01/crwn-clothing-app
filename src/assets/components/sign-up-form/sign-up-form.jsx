import { useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

//import { UserContext } from "../../../contexts/user.context";

import "./sign-up-form.scss"

const defaultFormFields = {
    displayName : "",
    email : "",
    password : "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    //const {setCurrentUser} = useContext(UserContext); // always in use in the component
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();{/* this is used to avoid reload of the form by default*/}
        if (password != confirmPassword){
            alert("Password do not match");
            return;
        }


        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);{/* send back user information since we now have it in our authentication table in firebase */}
            //setCurrentUser(user);
            await createUserDocumentFromAuth(user, {displayName}); {/* So here we modified slightly this function in order to pass an object with key=displayName and value: the typed information */}
            resetFormFields();
        }catch(err){
            if (err.code === "auth/email-already-in-use"){
                alert("Cannot create user, email already in use")
            }else {
                console.log(err)
            }
            
        }

    }

    return(
        <div className="sign-up-container">
            <h2> Don't have an account ?</h2>
            <span> Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                {/* Email */}
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                {/* Password */}
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                {/* Confirm password */}
                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
                
            </form>
        </div>
    )
}

export default SignUpForm;