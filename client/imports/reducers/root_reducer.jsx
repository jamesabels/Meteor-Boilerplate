import { combineReducers } from 'redux';


import testReducer from './test_reducer.jsx';


const rootReducer = combineReducers({
    test: testReducer,
});


export default rootReducer;