import React from "react";

import './auth.scss'
import SignIn from "../../components/sign_in/sign_in";
import SignUp from "../../components/sign_up/sign_up";

const AuthPage = () => (
    <div className={'auth-page'}>
        <SignIn />
        <SignUp />
    </div>
);

export default AuthPage;