import { Routes, Route } from 'react-router';
import RequestPage from './pages/RequestPage';

const routes = (
  <Routes>
    <Route path="/" element={<RequestPage />}/>
  </Routes>
);

export default routes;
