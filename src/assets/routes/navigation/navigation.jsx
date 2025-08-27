import { Outlet, Link } from "react-router";
import { Fragment, useContext } from "react";
import crwLogoUrl from "../../crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import IconCart from "../../components/icon-cart/icon-cart.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../../contexts/cart-icon.context";

import "./navigation.scss"

const Navigation = () =>{
  const {currentUser} = useContext(UserContext);  
  const {isClicked} = useContext(CartContext);


  return(
    <Fragment>
      <div className="navigation">
      <Link className="logo-container" to="/">
        <img src={crwLogoUrl} className="logo"></img>
      </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            {
                currentUser? <span className="nav-link" onClick={signOutUser}>SIGN OUT </span>: <Link className="nav-link" to="/auth">SIGN IN </Link>
            }
            <IconCart/>
        </div>
        {isClicked && <CartDropDown/>}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;

