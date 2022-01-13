import { Link } from 'react-router-dom';
import { ReactComponent as PagesIcon } from '../../assets/svg/pages.svg';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';

const MainNav = () => {
    return (
        <div className="mainNav">
            <div className="mainNav__wrapper">
                <a href="/">Logo</a>
                <ul className="mainNav__list">
                    <li className="mainNav__listItem">
                        <Link className="mainNav__link" to="pages">
                            <PagesIcon className="mainNav__icon" />
                            {'Страницы'}
                        </Link>
                    </li>
                    <li className="mainNav__listItem">
                        <Link className="mainNav__link" to="settings">
                            <SettingsIcon className="mainNav__icon" />
                            {'Управление'}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainNav;
