import React from 'react';
import  {Provider} from 'react-redux';


export default MainLayout = ({sidebar, content, store}) => (
    <Provider store={store}>
        <div>
            <div className="sidebar">
                {sidebar}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    </Provider>
);