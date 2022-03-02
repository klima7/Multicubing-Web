import { Switch, Route } from 'react-router-dom';
import TestPage from './routes/Test';
import IndexPage from './routes/Index';
import LoginPage from './routes/Login';
import RegisterPage from './routes/Register';
import RoomsPage from './routes/Rooms';
import NotFoundPage from './routes/NotFound';
import UserPage from './routes/User';
import AuthRoute from './components/AuthRoute';
import NotAuthRoute from './components/NotAuthRoute';
import RoomPage from './routes/Room';

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
    <AuthRoute path="/user/:username" exact>
      <UserPage />
    </AuthRoute>
    <AuthRoute path="/rooms/:roomSlug" exact>
      <RoomPage />
    </AuthRoute>
    <NotAuthRoute path="/" exact>
      <IndexPage />
    </NotAuthRoute>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default routes;
