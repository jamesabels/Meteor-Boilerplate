import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {connect} from 'react-redux';

// Import Actions
import TestActions from '../actions/test_actions.jsx';


class Content extends TrackerReact(React.Component) {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getMessage('Content');
    }

    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.test.content_message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessage: function (message) {
            dispatch(TestActions.SET_CONTENT_MESSAGE(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);