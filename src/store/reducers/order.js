import * as actionType from '../actions/actionTypes';

const initState = {
    orders: [],
    loading: false,
    error: null,
    ordered: false
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
                loading: false,
                error: null,
                ordered: true
            }
        case actionType.SUBMIT_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                ordered: false
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
                ordered: false,
                loading: false,
                error: null
            }
        case actionType.FETCH_ORDERS_ERROR:
            return {
                ...state,
                ordered: false,
                loading: false,
                error: action.error
            }
        case actionType.DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.id),
                loading: false,
                error: null
            }
        case actionType.DELETE_ORDERS_ERROR:
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