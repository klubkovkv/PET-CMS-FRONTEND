import { Outlet, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { useEffect } from 'react';

const AuthLayout = observer(() => {
    const { authStore } = useStore();
    const { isAuthorized } = authStore;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthorized) {
            return navigate('/pages');
        }
        return navigate('/');
    }, [isAuthorized]);

    return (
        <div className="wrapper">
            <Outlet />
        </div>
    );
});
export default AuthLayout;
