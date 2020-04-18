import React from "react";

import './button.scss'

const Button = ({children, isGoogleSign, ...other}) => (
    <button
        className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`}
        {...other}>

        {children}

    </button>
);

export default Button;