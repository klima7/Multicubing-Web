import { useParams } from 'react-router';
import { useEffect } from 'react';
import NotFound from '../components/NotFound';
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

  useEffect(() => {
    dispatch(getUser(username))
  }, [])

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
