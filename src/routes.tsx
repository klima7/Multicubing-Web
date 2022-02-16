import { Routes, Route } from 'react-router';
import RequestPage from './pages/RequestPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const routes = (
  <Routes>
    <Route path="/" element={<IndexPage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/register" element={<RegisterPage />}/>
    <Route path="/test" element={<RequestPage />}/>
  </Routes>
);

export default routes;
