export default function FoodItemsReducer(state={},action){
    switch(action.type){
        case 'GET_FOOD_ITEMS':
            return{...state, isLoading:true}
        case 'FOOD_ITEMS_RECEIVED':
            return{...state, records:action.foodItems, isLoading:false, error:action.error }
        default:
            return state;
    }
} 
