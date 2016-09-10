import React from 'react';
import {mount} from 'react-mounter'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

// Import layout
import Content from './imports/containers/content.jsx';
import Sidebar from './imports/containers/sidebar.jsx';
import MainLayout from './imports/main-layout.jsx';
import rootReducer from './imports/reducers/root_reducer.jsx';

const initialState = {};

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Create document head
const head = {
    title: 'Meteor Boilerplate'
};


DocHead.setTitle(head.title);

FlowRouter.route("/", {
    action () {
        mount(MainLayout, {
            sidebar: <Sidebar/>,
            content: <Content />,
            store: store
        });
    }
});