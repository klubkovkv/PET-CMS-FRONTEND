import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const Pages = observer(() => {
    const { breadcrumbsStore } = useStore();
    const { setBreadcrumbs } = breadcrumbsStore;

    useEffect(() => {
        const breadcrumbs = [
            {
                url: '/pages',
                name: 'Страницы',
            },
            {
                url: '#',
                name: 'Конструктор страниц',
            },
        ];

        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return <>{'ss'}</>;
});

export default Pages;
