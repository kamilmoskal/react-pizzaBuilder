import axios from '../../axios-db';
import * as actionTypes from './actionTypes'

export const submitOrder = (token, order) => {
    return dispatch => {
        dispatch({ type: actionTypes.SUBMIT_ORDER_START })
        axios.post('/orders.json?auth=' + token, order)
            .then(resp => dispatch({ type: actionTypes.SUBMIT_ORDER_SUCCESS }))
            .catch(error => dispatch({ type: actionTypes.SUBMIT_ORDER_ERROR, error}))
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch({ type: actionTypes.FETCH_ORDERS_START })

        axios.get('/orders.json?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"')
            .then(resp => {
                const orders = []
                for(let key in resp.data){
                    orders.push({
                        ...resp.data[key],
                        id: key
                    })
                }
                dispatch({ type: actionTypes.FETCH_ORDERS_SUCCESS, orders })
            })
            .catch(error => dispatch({ type: actionTypes.FETCH_ORDERS_ERROR, error}))
    }
}

export const deleteOrder = (token, id) => {
    return dispatch => {
        axios.delete('/orders/' + id + '.json?auth=' + token)
            .then(resp => {
                dispatch({ type: actionTypes.DELETE_ORDERS_SUCCESS, id })
            })
            .catch(error => dispatch({ type: actionTypes.DELETE_ORDERS_ERROR, error }))
    }
}