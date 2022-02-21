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
  const notFound = useAppSelector(state => state.user.notFound)

  useEffect(() => {
    dispatch(getUser(username))
  }, [])

  if(notFound === true) {
    return (
      <NotFound />
    );
  }

  return (
    <h1>User {username}</h1>
  );
}

export default UserPage;
