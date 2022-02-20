import { Switch, Route } from 'react-router-dom';
import TestPage from './pages/Test';
import IndexPage from './pages/Index';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import RoomsPage from './pages/Rooms';
import NotFoundPage from './pages/NotFound';
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
