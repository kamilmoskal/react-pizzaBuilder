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
               
                console.log(resp)
                dispatch({ type: actionTypes.AUTH_SUCCESS, token: resp.data.idToken, userId: resp.data.localId  })
            })
            .catch(error => {
                dispatch({ type: actionTypes.AUTH_ERROR, error: error.response.data.error })
            })
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}