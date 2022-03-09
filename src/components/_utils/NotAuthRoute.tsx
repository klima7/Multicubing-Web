import { Route } from 'react-router-dom';
import { FC } from 'react';
import { RouteProps, Redirect } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

interface Props extends RouteProps<string> {
  redirect?: string;
}

const NotAuthRoute: FC<Props> = ({ children, redirect="/rooms", ...rest }) => {
    const logged = useAppSelector((state) => state.auth.logged);

    return (
        <Route
          {...rest}
          render={() => {
            return logged === false ? (
              children
            ) : (
              <Redirect to={redirect} />
            );
          }}
        />
      );
}

export default NotAuthRoute;
