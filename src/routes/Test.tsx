import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { show, Notification } from '../utils/notifications';
import backend from '../api/backend'
import { refreshAccount } from '../redux/auth/auth-actions';
import { useAppThunkDispatch, useParentUrl } from '../hooks';

const notificationOpts: Notification = {
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 4,
};

function TestPage() {
  useParentUrl('/');

  const dispatch = useAppThunkDispatch();

  const env = process.env.NODE_ENV;
  
  return (
    <div style={{width: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
      <Stack spacing={1}>
        <p>Environment: {env}</p>
        <Button 
          variant="contained" 
          onClick={performRequest}
          >Perform request</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(refreshAccount)}
          >Refresh account</Button>
        <Stack spacing={1} direction="row" justifyContent="space-between">
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
        </Stack>
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
      </Stack>
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