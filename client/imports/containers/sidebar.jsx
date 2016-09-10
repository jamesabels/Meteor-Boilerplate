import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

// Import Actions
import TestActions from '../actions/test_actions.jsx';

//Import Connect
import {connect} from 'react-redux';

class Sidebar extends TrackerReact(React.Component) {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getMessage('Sidebar');
    }

    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.test.sidebar_message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessage: function (message) {
            dispatch(TestActions.SET_SIDEBAR_MESSAGE(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);