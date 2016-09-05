import React from 'react';

// Import react redux 
import { createStore, applyMiddleware } from 'redux';

// Import React Redux
import  { Provider } from 'react-redux';

// Import Reducer 
import rootReducer from './reducers/root_reducer.jsx';

// Import  Middleware
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


export default MainLayout = ({content, store}) => (
  <Provider store={store}>
    <div>
        <div className="container">
          {content}
        </div>
    </div>
  </Provider>
);