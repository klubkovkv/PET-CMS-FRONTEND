import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Login, Pages } from './pages';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Login />} />
                <Route path="pages" element={<Pages />} />
            </Route>
        </Routes>
    );
};

export default App;
