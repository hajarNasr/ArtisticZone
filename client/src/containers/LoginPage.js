import React from 'react';
import { useHistory } from 'react-router-dom';
import FormInput from '../components/FromInput';
import { Button } from '../components/Buttons';
import Header from '../layout/Header';
import { login } from '../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { checkErrors, getFormElements } from '../helpers';
import { useClearAuthErrors, useScrollToTop } from '../custom-hooks/CustomHooks';
import '../css/components/forms.css';

const LoginPage = () =>{
    useClearAuthErrors();
    useScrollToTop();
    const dispatch = useDispatch();
    const state = useSelector(state=>state.authReducer);
    const history = useHistory();

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const userInfo =  getFormElements(e.target, 2);
        dispatch(login(userInfo, history))
    }

    return (
        <div className="login-page-wrapper">
            <Header
               loginBtn = {false}
               signupBtn = {true}
               title="Welcome Back"
            />
            <div className="auth-form-wrapper">
                <form className="login-form"  onSubmit={handleLoginSubmit}>
                <FormInput
                        label = "Email"
                        id = "email"
                        type = "email"
                        placeholder = "example@email.com"
                />
                    <FormInput
                        label = "Password"
                        id = "password"
                        type = "password"
                        placeholder = "Password"
                        error =  {state.loginErrors? checkErrors(state.loginErrors, "loginError"):null}
                />
                <Button
                    className= "login-submit-btn"
                    type= "submit"
                    btnText = "Login"
                />
                </form>
            </div>
        </div>
    )
}

export default LoginPage;