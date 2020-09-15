import * as actionsTypes from './actionsTypes';
import { config } from '../../helpers'; 
import axios from 'axios';

/* AUTH ACTIONS */
export const authStartAction = ()=>({
    type:actionsTypes.AUTH_START,
});

export const authSuccessAction = (data)=>({
    type:actionsTypes.AUTH_SUCCESS,
    data: data
});
export const authFailLoginAction = (err)=>({
    type:actionsTypes.AUTH_FAIL_LOGIN,
    loginErrors: err,
});
export const authFailSignupAction = (err)=>{
    return{
    type:actionsTypes.AUTH_FAIL_SIGNUP,
    signupErrors: err
}};
export const authLogoutAction = ()=> ({
    type:actionsTypes.AUTH_LOGOUT,
});


export const signUp = (userInfo, history)=>{
    return dispatch=>{
        // start the signup process
        dispatch(authStartAction());

        axios.post("/api/users/signup/", 
        JSON.stringify(userInfo),
        config
        )
        .then(res=>{
            const {token, user} = res.data;
            console.log(res)
            dispatch(authSuccessAction(res.data));
            setTLocalStorge(token, user.id, user.isAdmin, user.cartItemsCount);
            history.push("/");
        })
        .catch(err=>{
            console.log(err)
            // pass the signup errors to the state
            dispatch(authFailSignupAction(err.response.data));
        })
    }
}

export const login = (userInfo, history)=>{
    return dispatch=>{
         // start the login process
         dispatch(authStartAction());

        axios.post("/api/users/login/", 
        JSON.stringify(userInfo) ,
        config
        )
        .then(res=>{
            const {token, user} = res.data;
            console.log(res)
            dispatch(authSuccessAction(res.data));
            setTLocalStorge(token, user.id, user.isAdmin, user.cartItemsCount);
            history.push("/");
        })
        .catch(err=>{
            console.log(err)
            dispatch(authFailLoginAction(err.response.data));
        })
    }
}

export const logout = (history)=>{
    return dispatch=>{
        clearLocalStorge();
        dispatch(authLogoutAction());
        history.push("/");
    }
} 

export const clearAuthErrors = ()=>({
    type: actionsTypes.CLEAR_AUTH_ERRORS
});
const setTLocalStorge = (token, userId, isAdmin, cartItemsCount) =>{
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem("isAdmin", isAdmin);
    localStorage.setItem("cartItemsCount", parseInt(cartItemsCount));
}

const clearLocalStorge = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem("cartItemsCount");
}

