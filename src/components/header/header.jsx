import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/user_selectors";
import { selectCartHidden } from "../../redux/selectors/cart_selectors";

import { auth } from '../../firebase/firebase_utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, LogoContainer,
         OptionsContainer, Option  } from "./header.styles";

import CartIcon from "../cart_icon/cart_icon";
import CartDropdown from "../cart_dropdown/cart_dropdown";


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <Option to='/shop'>SHOP</Option>
            <Option to='/contacts'>CONTACT</Option>
            {
                currentUser ?
                    <Option as='div' onClick={() => auth.signOut()}>SIGN OUT</Option>
                    : <Option to={'/authorization'}>SIGN IN</Option>
            }
            <CartIcon/>
        </OptionsContainer>

        { !hidden && <CartDropdown/> }

    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);