import { Switch, Route } from 'react-router-dom';
import TestPage from './routes/Test';
import IndexPage from './routes/Index';
import LoginPage from './routes/Login';
import RegisterPage from './routes/Register';
import RoomsPage from './routes/Rooms';
import NotFoundPage from './routes/NotFound';
import AuthRoute from './components/AuthRoute';
import NotAuthRoute from './components/NotAuthRoute';

const routes = (
  <Switch>
    <NotAuthRoute path="/login" exact>
      <LoginPage />
    </NotAuthRoute>
    <NotAuthRoute path="/register" exact>
      <RegisterPage />
    </NotAuthRoute>
    <AuthRoute path="/rooms" exact>
      <RoomsPage />
    </AuthRoute>
    <Route path="/test" exact>
      <TestPage />
    </Route>
    <NotAuthRoute path="/" exact>
      <IndexPage />
    </NotAuthRoute>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default routes;
