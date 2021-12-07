import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Login, Pages } from './pages';

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="pages" element={<Pages />} />
            </Route>
        </Routes>
    );
};

export default App;
