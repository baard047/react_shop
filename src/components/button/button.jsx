import React from "react";

import './button.scss'

const Button = ({children, isGoogleSign, inverted, ...other}) => (
    <button
        className={`${isGoogleSign ? 'google-sign-in' : ''} 
                    ${inverted ? 'inverted' : ''}
                    custom-button`}
        {...other}>

        {children}

    </button>
);

export default Button;