import { Outlet, Link } from "react-router";
import { Fragment, useContext } from "react";
import crwLogoUrl from "../../crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import IconCart from "../../components/icon-cart/icon-cart.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../../contexts/cart-icon.context";

import {NavigationContainer, LogoContainer, NavLink, NavLinks} from "./navigation-styles.jsx";

const Navigation = () =>{
  const {currentUser} = useContext(UserContext);  
  const {isClicked} = useContext(CartContext);


  return(
    <Fragment>
      <NavigationContainer>
      <LogoContainer to="/">
        <img src={crwLogoUrl} className="logo"></img>
      </LogoContainer>
        <NavLinks>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            {
                currentUser? <NavLink as="span" onClick={signOutUser}>SIGN OUT </NavLink>: <NavLink to="/auth">SIGN IN </NavLink>
            }
            <IconCart/>
        </NavLinks>
        {isClicked && <CartDropDown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;

