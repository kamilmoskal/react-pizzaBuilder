import axios from '../../axios-db';
import * as actionTypes from './actionTypes'

export const submitOrder = (order) => {
    return dispatch => {
        dispatch({ type: actionTypes.SUBMIT_ORDER_START })
        axios.post('/orders.json', order)
            .then(resp => dispatch({ type: actionTypes.SUBMIT_ORDER_SUCCESS }))
            .catch(error => dispatch({ type: actionTypes.SUBMIT_ORDER_ERROR, error}))
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch({ type: actionTypes.FETCH_ORDERS_START })
        axios.get('/orders.json')
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

export const deleteOrder = (id) => {
    return dispatch => {
        dispatch({ type: actionTypes.FETCH_ORDERS_START })
        axios.delete('/orders/' + id + '.json')
            .then(resp => {
                dispatch({ type: actionTypes.DELETE_ORDERS_SUCCESS })
                dispatch(fetchOrders())
            })
            .catch(error => dispatch({ type: actionTypes.DELETE_ORDERS_ERROR }))
    }
}