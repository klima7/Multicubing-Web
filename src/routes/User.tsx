import { useParams } from 'react-router';
import { useEffect } from 'react';
import NotFound from '../components/NotFound';
import LoadingIndicator from '../components/LoadingIndicator';
import { useAppSelector, useAppThunkDispatch } from '../utils/hooks';
import { getUser } from '../actions/user-actions'

type UserParams = {
  username: string;
};

function UserPage() {
  const { username } = useParams<UserParams>();
  const dispatch = useAppThunkDispatch();
  const notFound = useAppSelector(state => state.user.notFound);
  const user = useAppSelector(state => state.user.user);
  const loading = useAppSelector(state => state.user.loading);

  useEffect(() => {
    dispatch(getUser(username))
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
      <h1>Username {user?.username}</h1>
      <h1>Email {user?.email}</h1>
    </div>
  );
}

export default UserPage;
