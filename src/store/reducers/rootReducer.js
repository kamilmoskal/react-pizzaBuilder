import { combineReducers } from 'redux';
import authReducer from './auth';
import makingPizzaReducer from './makingPizza';
import orderReducer from './order';

const rootReducer = combineReducers({
    auth: authReducer,
    mp: makingPizzaReducer,
    order: orderReducer
})

export default rootReducer;