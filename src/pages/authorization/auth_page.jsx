import React from "react";

import './auth.scss'
import SignIn from "../../components/sign_in/sign_in";

const AuthPage = () => (
    <div className={'sign-in-and-sign-up'}>
        <SignIn />
    </div>
);

export default AuthPage;