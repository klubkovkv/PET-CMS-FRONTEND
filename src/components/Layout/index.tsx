import { Outlet, Navigate } from 'react-router-dom';

const Layout = () => {
    const isAuth = false;
    return (
        <div className="wrapper">
            <div className="wrapper__content">
                {isAuth ? <Outlet /> : <Navigate to="/login" />}
            </div>
        </div>
    );
};

export default Layout;
