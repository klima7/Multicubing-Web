import { useParams } from 'react-router';

type UserParams = {
  username: string;
};

function UserPage() {
  const { username } = useParams<UserParams>();
  return (
    <h1>User {username}</h1>
  );
}

export default UserPage;
