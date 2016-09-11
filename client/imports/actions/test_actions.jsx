import {CONTENT_MESSAGE} from '../utils/constants.jsx';
import {SIDEBAR_MESSAGE} from '../utils/constants.jsx';
import {NAV_MESSAGE} from '../utils/constants.jsx';
import {FOOTER_MESSAGE} from '../utils/constants.jsx';


export default TestActions = {};

TestActions.SET_CONTENT_MESSAGE = function (message) {

    return (dispatch) => {
        return dispatch({
            type: CONTENT_MESSAGE,
            payload: message,
        });
    }
};

TestActions.SET_SIDEBAR_MESSAGE = function (message) {

    return (dispatch) => {
        return dispatch({
            type: SIDEBAR_MESSAGE,
            payload: message,
        });
    }
};

TestActions.SET_NAVIGATION_MESSAGE = function (message) {

    return (dispatch) => {
        return dispatch({
            type: NAV_MESSAGE,
            payload: message,
        });
    }
};

TestActions.SET_FOOTER_MESSAGE = function (message) {

    return (dispatch) => {
        return dispatch({
            type: FOOTER_MESSAGE,
            payload: message,
        });
    }
};