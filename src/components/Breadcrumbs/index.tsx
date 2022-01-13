import { VFC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface BreadcrumbsProps {
    breadcrumbs: {
        url: string;
        name: string;
    }[];
}

const Breadcrumbs: VFC<BreadcrumbsProps> = props => {
    const { breadcrumbs } = props;
    const navigate = useNavigate();

    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__container">
                <ul
                    className="breadcrumbs__nav"
                    itemScope
                    itemType="http://schema.org/BreadcrumbList">
                    <li
                        className="breadcrumbs__item"
                        itemProp="itemListElement"
                        itemScope
                        itemType="http://schema.org/ListItem">
                        <meta itemProp="position" content="0" />

                        <Link
                            className="breadcrumbs__link"
                            itemProp="item"
                            to={'/'}>
                            Главная
                        </Link>
                    </li>

                    {breadcrumbs.map((item, index) => {
                        return (
                            <li
                                className="breadcrumbs__item"
                                itemProp="itemListElement"
                                itemScope
                                itemType="http://schema.org/ListItem">
                                <meta
                                    itemProp="position"
                                    content={`${index + 1}`}
                                />

                                <Link
                                    className="breadcrumbs__link"
                                    itemProp="item"
                                    to={item.url}>
                                    <span itemProp="name">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        href={void 0}
                        className="breadcrumbs__back"
                        onClick={() => navigate(-1)}>
                        Назад
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
