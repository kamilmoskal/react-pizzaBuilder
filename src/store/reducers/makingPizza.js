import * as actionType from '../actions/actionTypes';

const priceFor4gram = {
    onion: .26,
    salami: .36,
    mushrooms: .25,
    olives: .34,
    basil: .25,
    pineapple: .32,
    redPepper: .30,
    greenPepper: .30
}

const initState = {
    ingredients: null,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.INIT_INGREDIENTS:
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
                        price: action.value * priceFor4gram[action.ingType]
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
            const randomNumberOfIngredients = Math.floor(Math.random()*7) + 1;
            
            let newIngredients={}
            for(let i=0; i<randomNumberOfIngredients; i++){
                let randomAmount = Math.floor(Math.random()*15) + 5;
                let randomType = arrayOfIngTypes[Math.floor(Math.random()*arrayOfIngTypes.length)]
            
                newIngredients = {
                    ...newIngredients,
                    [randomType]: {
                        amount: randomAmount,
                        price: randomAmount * priceFor4gram[randomType]
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