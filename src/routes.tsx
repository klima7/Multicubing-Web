import { Switch, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoomsPage from './pages/RoomsPage';

const routes = (
  <Switch>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/rooms">
      <RoomsPage />
    </Route>
    <Route path="/test">
      <TestPage />
    </Route>
    <Route path="/">
      <IndexPage />
    </Route>
  </Switch>
);

export default routes;
