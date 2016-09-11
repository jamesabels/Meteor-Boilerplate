import React from 'react';
import  {Provider} from 'react-redux';


export default MainLayout = ({sidebar, content, nav, footer, store}) => (
    <Provider store={store}>
        <div className="page-wrap">
            <div className="nav-wrap">
                {nav}
            </div>
            <div className="content-wrap">
                <div className="sidebar-wrap">
                    {sidebar}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            <div className="footer-wrap">
                {footer}
            </div>
        </div>
    </Provider>
);