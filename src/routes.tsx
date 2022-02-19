import { Switch, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoomsPage from './pages/RoomsPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/ProtectedRoute';

const routes = (
  <Switch>
    <Route path="/login" exact>
      <LoginPage />
    </Route>
    <Route path="/register" exact>
      <RegisterPage />
    </Route>
    <PrivateRoute path="/rooms" exact>
      <RoomsPage />
    </PrivateRoute>
    <Route path="/test" exact>
      <TestPage />
    </Route>
    <Route path="/" exact>
      <IndexPage />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default routes;
