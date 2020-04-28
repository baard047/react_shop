import React, {Component} from "react";
import { connect } from 'react-redux'

import './sign_in.scss'
import FormInput from "../form_input/form_input";
import Button from "../button/button";

import { googleSignInStart, emailSignInStart } from "../../redux/actions/user_actions";

const INITIAL_STATE = { email: '', password: '' };

class SignIn extends Component {
    state = { ...INITIAL_STATE };

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;

        const { email, password } = this.state;

        emailSignInStart(email, password);

        //try {
        //    await auth.signInWithEmailAndPassword(email, password);
        //    this.setState({...INITIAL_STATE})
        //} catch (error) {
        //    console.log(error.message)
        //}
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const { googleSignInStart } = this.props;

        return (
            <div className={'sign-in'}>
                <h3 className={'title'}>I already have an account</h3>
                <span>Sign in</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'}
                               type='email'
                               label='Email'
                               value={ this.state.email}
                               handleChange={this.handleChange}
                               required/>
                    <FormInput name={'password'}
                               type='password'
                               label='Password'
                               value={this.state.password}
                               handleChange={this.handleChange}
                               required/>

                    <div className={'buttons'}>
                        <Button type="submit">Sign In</Button>
                        <Button type="button"
                                isGoogleSign
                                onClick={googleSignInStart}
                        >
                            Sign with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);