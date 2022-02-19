import { Switch, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RoomsPage from './pages/RoomsPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = (
  <Switch>
    <Route path="/login" exact>
      <LoginPage />
    </Route>
    <Route path="/register" exact>
      <RegisterPage />
    </Route>
    <Route path="/rooms" exact>
      <RoomsPage />
    </Route>
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
