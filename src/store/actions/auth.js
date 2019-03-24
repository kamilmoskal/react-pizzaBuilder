import axios from 'axios';
import * as actionTypes from './actionTypes';

export const auth = (email,password,signIn,remember) => {
    return dispatch => {
        dispatch({ type: actionTypes.AUTH_START })

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAGeTjdqblz2Z5tDZ8eY4G7H2wtnTV0N9Q';
        if (!signIn) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAGeTjdqblz2Z5tDZ8eY4G7H2wtnTV0N9Q';
        }

        axios.post(url, authData)
            .then(resp => {

                if (remember) {
                    const expirationDate = new Date(new Date().getTime() + (resp.data.expiresIn * 1000));
                    sessionStorage.setItem('token', resp.data.idToken);
                    sessionStorage.setItem('userId', resp.data.localId);
                    sessionStorage.setItem('expirationDate', expirationDate);
                }
                dispatch({ type: actionTypes.AUTH_SUCCESS, token: resp.data.idToken, userId: resp.data.localId  })
                dispatch(checkAuthTimeout(resp.data.expiresIn));
            })
            .catch(error => {
                dispatch({ type: actionTypes.AUTH_ERROR, error: error.response.data.error })
            })
    }
}

export const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('expirationDate');
    
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }
}

export const checkAuthentication = () => {
    return dispatch => {
        const token = sessionStorage.getItem("token");   

        if (token){
            const userId = sessionStorage.getItem("userId"); 
            const expirationDate = new Date(sessionStorage.getItem("expirationDate"));

            if (new Date() < expirationDate ){
                dispatch({ type: actionTypes.AUTH_SUCCESS, token, userId  })
            }
            else {
                dispatch(logout())
            }
        }
    }
}