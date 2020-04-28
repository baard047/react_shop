import { userTypes } from "../types";

export const googleSignInStart = () => ({
   type: userTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFail = error => ({
    type: userTypes.SIGN_IN_FAIL,
    payload: error
});

export const emailSignInStart = ({email, password}) => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: { email, password }
});
