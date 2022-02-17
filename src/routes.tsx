import { Routes, Route } from 'react-router';
import TestPage from './pages/TestPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoomsPage from './pages/RoomsPage';

const routes = (
  <Routes>
    <Route path="/" element={<IndexPage />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/register" element={<RegisterPage />}/>
    <Route path="/rooms" element={<RoomsPage />}/>
    <Route path="/test" element={<TestPage />}/>
  </Routes>
);

export default routes;
