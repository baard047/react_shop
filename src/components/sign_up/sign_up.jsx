import React, {Component} from "react";

import { auth, createUserRecord } from "../../firebase/firebase_utils";

import FormInput from "../form_input/form_input";
import Button from "../button/button";

import './sign_up.scss'

const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

class SignUp extends Component {
    state = {
        ...INITIAL_STATE
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if( password !== confirmPassword ) {
            alert("passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserRecord(user, { displayName });

            this.setState({...INITIAL_STATE}); //clearing input forms
        } catch (error) {
            console.log(error.message);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className={'sign-up'}>
                <h3 className={'title'}>I do not have a account</h3>
                <span>Sign up with your email and password</span>
                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput
                        type={'text'}
                        name={'displayName'}
                        value={displayName}
                        onChange={this.handleChange}
                        label={'Display Name'}
                        required
                    />
                    <FormInput
                        type={'email'}
                        name={'email'}
                        value={email}
                        onChange={this.handleChange}
                        label={'Email'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'password'}
                        value={password}
                        onChange={this.handleChange}
                        label={'Password'}
                        required
                    />
                    <FormInput
                        type={'password'}
                        name={'confirmPassword'}
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label={'Confirm Password'}
                        required
                    />
                    <Button type={'submit'}>SIGN UP</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;