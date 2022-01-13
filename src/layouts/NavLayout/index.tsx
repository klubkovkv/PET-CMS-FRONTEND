import { Outlet } from 'react-router-dom';
import MainNav from '../../components/MainNav';
import Breadcrumbs from '../../components/Breadcrumbs';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const NavLayout = observer(() => {
    const { breadcrumbsStore } = useStore();
    const { breadcrumbs } = breadcrumbsStore;
    return (
        <>
            <MainNav />
            <div className="wrapper__content">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <Outlet />
            </div>
        </>
    );
});
export default NavLayout;
