import { Switch, Route } from 'react-router-dom';
import TestPage from './routes/Test';
import IndexPage from './routes/Index';
import LoginPage from './routes/Login';
import RegisterPage from './routes/Register';
import RoomsPage from './routes/Rooms';
import NotFoundPage from './routes/NotFound';
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
