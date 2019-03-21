import axios from '../../axios-db';
import * as actionTypes from './actionTypes'

export const initIngredients = () => {
    return (dispatch, getState) => {
        axios.get('/ingredients.json')
            .then(resp => {
                dispatch({ type: actionTypes.INIT_INGREDIENTS_SUCCESS, ingredients: resp.data})
            })
            .catch(error => {
                dispatch({ type: actionTypes.INIT_INGREDIENTS_ERROR, error })
            })
    }
}

export const changeIngredient = (value, ingType) => {
    return {
        type: actionTypes.CHANGE_INGREDIENT, value, ingType
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS
    }
}

export const randomPizza = () => {
    return dispatch => {
        dispatch(resetIngredients());
        dispatch({ type: actionTypes.RANDOM_PIZZA });
    }
}