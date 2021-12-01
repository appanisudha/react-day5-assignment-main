import { combineReducers } from 'redux';
import foodItems from './foodItemsReducer';

const rootReducer = combineReducers({
    foodItems
});

export default rootReducer;