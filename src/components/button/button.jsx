import React from "react";

import './button.scss'

const Button = ({ children, ...other }) => (
    <button className={'custom-button'} {...other}>
        { children }
    </button>
);

export default Button;