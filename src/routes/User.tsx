import { useParams } from 'react-router';
import { useEffect } from 'react';
import NotFound from '../components/_lib/NotFound';
import LoadingIndicator from '../components/_lib/LoadingIndicator';
import { useAppSelector, useAppThunkDispatch, useParentUrl } from '../hooks';
import { getUser, clearUser } from '../redux/user/user-actions'

type UserParams = {
  username: string;
};

function UserPage() {
  const { username } = useParams<UserParams>();
  const dispatch = useAppThunkDispatch();
  const notFound = useAppSelector(state => state.user.notFound);
  const user = useAppSelector(state => state.user.user);
  const loading = useAppSelector(state => state.user.loading);

  useParentUrl('/rooms');

  useEffect(() => {
    dispatch(getUser(username))
    return () => {
      dispatch(clearUser())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading) {
    return (
      <LoadingIndicator />
    );
  }

  if(notFound === true) {
    return (
      <NotFound />
    );
  }

  return (
    <div>
      <h1>Username: {user?.username}</h1>
      <h1>Email: {user?.email}</h1>
      <h1>Join date: {String(user?.dateJoined?.toLocaleDateString("en-US"))}</h1>
      <h1>Active: {String(user?.active)}</h1>
      {user?.lastSeen &&
        (<h1>Last seen: {String(user?.lastSeen?.toLocaleString())}</h1>)
      }
    </div>
  );
}

export default UserPage;
