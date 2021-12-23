import { Outlet, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { useEffect } from 'react';

const Layout = observer(() => {
    const { authStore } = useStore();
    const { isAuthorised } = authStore;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthorised) {
            return navigate('/pages');
        }
        return navigate('/');
    }, [isAuthorised, navigate]);

    return (
        <div className="wrapper">
            <div className="wrapper__content">
                <Outlet />
            </div>
        </div>
    );
});
export default Layout;
