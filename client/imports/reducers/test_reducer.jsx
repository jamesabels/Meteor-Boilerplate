import {CONTENT_MESSAGE} from '../utils/constants.jsx';
import {SIDEBAR_MESSAGE} from '../utils/constants.jsx';
import {NAV_MESSAGE} from '../utils/constants.jsx';
import {FOOTER_MESSAGE} from '../utils/constants.jsx';


initState = {};


export default testReducer = function (state = initState, action) {
    switch (action.type) {
        case CONTENT_MESSAGE:
            return Object.assign({}, state, {
                content_message: action.payload
            });
        case SIDEBAR_MESSAGE:
            return Object.assign({}, state, {
                sidebar_message: action.payload
            });
        case NAV_MESSAGE:
            return Object.assign({}, state, {
                nav_message: action.payload
            });
        case FOOTER_MESSAGE:
            return Object.assign({}, state, {
                footer_message: action.payload
            });
        default:
            return state;
    }
}