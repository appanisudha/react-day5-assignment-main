import { put , takeLatest, all } from 'redux-saga/effects';

// worker saga 
function* getFoodItems(){
    const records = yield fetch('http://localhost:6200/foodItems')
    .then(response => response.json());
    yield put({type:"FOOD_ITEMS_RECEIVED", foodItems : records, error: false})
}



// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_FOOD_ITEMS', getFoodItems)
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}

