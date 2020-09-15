import React from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '../components/FromInput';
import { Button } from '../components/Buttons';
import Header from '../layout/Header';
import { signUp } from '../store/actions/authActions';
import { useClearAuthErrors, useScrollToTop } from '../custom-hooks/CustomHooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkErrors, getFormElements } from '../helpers';
import '../css/components/forms.css';

const SignupPage = () =>{
    useClearAuthErrors();
    useScrollToTop();
    const dispatch = useDispatch();
    const state = useSelector(state=>state.authReducer);
    const history = useHistory();

    const handleSingupSubmit = (e)=>{
        e.preventDefault();

        // extract the user info from the signup form
        const userInfo =  getFormElements(e.target, 4);

        dispatch(signUp(userInfo, history))
    }
    return (
        <div className="signup-page-wrapper">
             <Header
                signupBtn = {false}
                loginBtn = {true}
                title="Join us"
             />
            <div className="auth-form-wrapper">
            <form className="signup-form" onSubmit={handleSingupSubmit}>
                <FormInput
                    label = "Username"
                    id =   "username"
                    type = "text"
                    placeholder = "Username"
                    error = {state.signupErrors? checkErrors(state.signupErrors, "username"):null}
                />
                <FormInput
                    label = "Email"
                    id = "email"
                    type = "email"
                    placeholder = "example@email.com"
                    error = {state.signupErrors? checkErrors(state.signupErrors, "email"):null}
                />
                <FormInput
                    label = "Password"
                    id = "password1"
                    type = "password"
                    placeholder = "Password"
                    error = {state.signupErrors? checkErrors(state.signupErrors, "password1"):null}
                />
                <FormInput
                    label = "Confirm Password"
                    id = "password2"
                    type = "password"
                    placeholder = "Confirm Password"
                    error = {state.signupErrors? checkErrors(state.signupErrors, "password2"):null}
                />
                <Button
                    className= "login-submit-btn"
                    type= "submit"
                    btnText = "Sign up"
                />
            </form>
            </div>
        </div>
    )
}

export default SignupPage;