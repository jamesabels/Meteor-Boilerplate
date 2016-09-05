import { MESSAGE } from '../utils/constants.jsx';

export default TestActions = {};

TestActions.SET_MESSAGE = function (message) {

    return (dispatch) => {
        return dispatch({
            type: MESSAGE,
            payload: message,
        });
    }
};