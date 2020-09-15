import * as actionsTypes from '../actions/actionsTypes';
import { updateState } from './updateState';

export const initialState = { 
    isLoading:false,
}
/* AUTH REDUCERS */
const authSatrtReducer = (state, action)=>(
    updateState(state,{
        isLoading:true,
    })
);
const authSucessReducer= (state, action)=>(
    updateState(state,{
        isLoading:false,
        //cartItemsCount:action.data.user.cartItemsCount,
        ...action.data
    })
);
const authFailLoginReducer= (state, action)=>(
    updateState(state,{
        loginErrors: action.loginErrors
    })
);
const authFailSignupReducer= (state, action)=>(
    updateState(state,{
        signupErrors: action.signupErrors
    })
);
const authLogoutReducer = (state, action)=>{
    return updateState(state,{
                isLoading:false,
                loginErrors: null,
                signupErrors: null,
    })
};

const clearAuthErrorsReducer = (state, action)=>(
     updateState(state, {
        signupErrors: null,
        loginErrors: null
     })
);
const authReducer = (state=initialState, action)=>{
    switch(action.type){
        /* AUTH REDUCERS */
        case actionsTypes.AUTH_START:        return authSatrtReducer      (state, action);
        case actionsTypes.AUTH_SUCCESS:      return authSucessReducer     (state, action);
        case actionsTypes.AUTH_FAIL_LOGIN:   return authFailLoginReducer  (state, action);
        case actionsTypes.AUTH_FAIL_SIGNUP:  return authFailSignupReducer (state, action);
        case actionsTypes.AUTH_LOGOUT:       return authLogoutReducer     (state, action);
        case actionsTypes.CLEAR_AUTH_ERRORS: return clearAuthErrorsReducer(state, action);
        default: return state
    }
}

export default authReducer;