import * as actionType from '../actions/actionTypes';

const initState = {
    orders: [],
    loading: false,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SUBMIT_ORDER_START:
            return {
                ...state,
                loading: true
            }
        case actionType.SUBMIT_ORDER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actionType.SUBMIT_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionType.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionType.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionType.FETCH_ORDERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;