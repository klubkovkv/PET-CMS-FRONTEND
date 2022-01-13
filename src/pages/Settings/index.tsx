import { useEffect } from 'react';
import { useStore } from '../../store';
import { observer } from 'mobx-react-lite';

const Settings = observer(() => {
    const { breadcrumbsStore } = useStore();
    const { setBreadcrumbs } = breadcrumbsStore;

    useEffect(() => {
        const breadcrumbs = [
            {
                url: '/settings',
                name: 'Общие настройки',
            },
        ];

        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return <div>{'Настройки'}</div>;
});

export default Settings;
