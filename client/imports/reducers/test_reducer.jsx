import { MESSAGE } from '../utils/constants.jsx';

initState = {};

// Counter Reducer
export default testReducer = function(state = initState, action) {
    switch (action.type) {
        case MESSAGE:
            return Object.assign({}, state, {
                message: action.payload
            });
        default:
            return state;
    }
}