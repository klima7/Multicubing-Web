import { Route } from 'react-router-dom';
import { Notification } from 'react-notification-system';
import { warning } from 'react-notification-system-redux';
import { FC } from 'react';
import { RouteProps, Redirect } from 'react-router-dom';
import { useAppSelector, useAppThunkDispatch } from '../utils/hooks';

interface Props extends RouteProps<string> {}

const AuthRoute: FC<Props> = ({ children, ...rest }) => {
    const logged = useAppSelector((state) => state.auth.logged);
    const dispatch = useAppThunkDispatch()

    if(!logged) {
        const notification: Notification = {
          title: 'Login required',
          message: 'This page is protected',
          position: 'tr',
          autoDismiss: 8,
        };
        dispatch(warning(notification))
    }

    return (
        <Route
          {...rest}
          render={({ location }) => {
            return logged === true ? (
              children
            ) : (
              <Redirect to={{
                  pathname: "/login",
                  state: { from: location },
              }} />
            );
          }}
        />
      );
}

export default AuthRoute;