import { userTypes } from "../types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: action.payload
            };
        case userTypes.SIGN_IN_FAIL:
            return {...state, error: action.payload};

        default:
            return state;
    }
};