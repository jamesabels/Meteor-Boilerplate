import React from 'react';
import { mount } from 'react-mounter'


// Import Components
import Hello from './imports/containers/hello.jsx';

// Import Layouts
import MainLayout from './imports/main-layout.jsx';

// Import  Middleware
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Import react redux
import { createStore, applyMiddleware } from 'redux';

// Import Reducer
import rootReducer from './imports/reducers/root_reducer.jsx';

FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      content: <Hello />,
      store: createStoreWithMiddleware(rootReducer)
    });
  }
});