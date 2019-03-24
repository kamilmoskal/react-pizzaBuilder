import * as actionType from '../actions/actionTypes';

const initState = {
    token: null,
    userId: null,
    loading: false,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                loading: false,
                error: null
            }
        case actionType.AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionType.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null
            }
        default:
            return state
    }
}

export default reducer;