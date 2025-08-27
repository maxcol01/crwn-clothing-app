import { useState} from "react";
import { signinWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { UserContext } from "../../../contexts/user.context";

import "./sign-in-form.scss"

const defaultFormFields = {
    email : "",
    password : "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    //const {setCurrentUser} = useContext(UserContext);
    //const {setCurentUser} = useContext(UserContext)

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const SigInWithGoogle = async () => {
            await signinWithGooglePopup();
        }

    const handleSubmit = async (event) => {
        event.preventDefault();{/* this is used to avoid reload of the form by default*/}



        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
            //setCurrentUser(response.user);
            //setCurentUser(user)
            resetFormFields();
        }catch(err){
            switch (err.code){
                case "auth/wrong-password":
                    alert("Incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("Incorrect email with password");
                    break;

                default:
                    console.log(err)
            }
            
        }

    }

    return(
        <div className="sign-up-container">
            <h2> Already have an account </h2>
            <span> Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* Email */}
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                {/* Password */}
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={SigInWithGoogle}> Google sign in</Button>
                </div>
              
            </form>
        </div>
    )
}

export default SignInForm;