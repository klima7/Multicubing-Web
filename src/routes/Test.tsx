import { useAppThunkDispatch } from '../utils/hooks';
import Button from '@mui/material/Button';
import { show, Notification } from '../utils/notifications';
import backend from '../api/backend'
import { refreshAccount } from '../actions/auth-actions';
import { Link } from 'react-router-dom';

const notificationOpts: Notification = {
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 4,
};

function TestPage() {
  const dispatch = useAppThunkDispatch();

  const env = process.env.NODE_ENV;
  
  return (
    <div>
        <button onClick={performRequest}>Perform request</button>
        <button onClick={() => dispatch(refreshAccount)}>Refresh account</button>
        <p>Environment: {env}</p>

        <Button 
          variant="contained" 
          onClick={() => dispatch(show(notificationOpts, 'success'))}
          >Success</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(show(notificationOpts, 'error'))}
          >Error</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(show(notificationOpts, 'warning'))}
          >Warning</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(show(notificationOpts, 'info'))}
          >Info</Button>
        <Button
          variant="contained"
          component={Link}
          to={"/sfer"}
        >To nowhere</Button>
        <Button
          variant="contained"
          component={Link}
          to={"/user/klima7"}
        >klima7 profile</Button>
        <Button
          variant="contained"
          component={Link}
          to={"/user/unknown"}
        >Unknown profile</Button>
    </div>
  );
}

function performRequest() {
  backend.get(`/accounts/`)
  .then(res => {
    const persons = res.data;
    console.log(persons);
  })
}

export default TestPage;