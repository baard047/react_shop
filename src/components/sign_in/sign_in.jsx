import React, {Component} from "react";

import './sign_in.scss'
import FormInput from "../form_input/form_input";
import Button from "../button/button";

import { auth, signInWithGoogle} from "../../firebase/firebase_utils";

const INITIAL_STATE = { email: '', password: '' };

class SignIn extends Component {
    state = { ...INITIAL_STATE };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({...INITIAL_STATE})
        } catch (error) {
            console.log(error.message)
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className={'sign-in'}>
                <h3 className={'title'}>I already have an account</h3>
                <span>Sign in</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'}
                               type='email'
                               label='Email'
                               value={email}
                               handleChange={this.handleChange}
                               required/>
                    <FormInput name={'password'}
                               type='password'
                               label='Password'
                               value={password}
                               handleChange={this.handleChange}
                               required/>

                    <div className={'buttons'}>
                        <Button type="submit">Sign In</Button>
                        <Button isGoogleSign
                                onClick={signInWithGoogle}
                        >
                            Sign with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;