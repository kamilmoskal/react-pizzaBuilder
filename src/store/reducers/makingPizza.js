import * as actionType from '../actions/actionTypes';

const priceFor1gram = {
    onion: .07,
    salami: .1,
    mushrooms: .08,
    olives: .09,
    basil: .09,
    pineapple: .1,
    redPepper: .07,
    greenPepper: .07
}

const initState = {
    ingredients: null,
    startedPrice: 14,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.INIT_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients
            }
        case actionType.INIT_INGREDIENTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionType.CHANGE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: {
                        amount: action.value,
                        price: action.value * priceFor1gram[action.ingType]
                    }
                }
            }
        case actionType.RESET_INGREDIENTS:
            const resetIngredients = {}
            for(let key in state.ingredients){
                resetIngredients[key] = { amount: 0, price: 0 }
            }
            return {
                ...state,
                ingredients: resetIngredients
            }
        case actionType.RANDOM_PIZZA:

            let arrayOfIngTypes = []
            for(let key in state.ingredients){
                arrayOfIngTypes.push(key);
            }
            const randomNumberOfIngredients = Math.floor(Math.random()*8) + 1;
            
            let newIngredients={}
            for(let i=0; i<randomNumberOfIngredients; i++){
                let randomAmount = Math.floor(Math.random()*60) + 20;
                let randomType = arrayOfIngTypes[Math.floor(Math.random()*arrayOfIngTypes.length)]
            
                newIngredients = {
                    ...newIngredients,
                    [randomType]: {
                        amount: randomAmount,
                        price: randomAmount * priceFor1gram[randomType]
                    }
                }
                arrayOfIngTypes = arrayOfIngTypes.filter(ing => ing !== randomType);
            }
            console.log(randomNumberOfIngredients)
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    ...newIngredients
                  }
            }
        default:
            return state;
    }
}

export default reducer;