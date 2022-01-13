import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import NavLayout from './layouts/NavLayout';
import { Login, Pages, Settings } from './pages';

const App = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
                <Route element={<NavLayout />}>
                    <Route path="pages" element={<Pages />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
