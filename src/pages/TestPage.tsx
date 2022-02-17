import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../hooks';
import { increment } from '../actions/authActions';
import Button from '@mui/material/Button';
import { success, error, warning, info } from 'react-notification-system-redux';
import { Notification } from 'react-notification-system';

const notificationOpts: Notification = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 2,
};

function TestPage() {
  const count = useAppSelector((state) => state.authReducer.value)
  const dispatch = useAppDispatch()

  const env = process.env.NODE_ENV;
  
  return (
    <div>
        <button onClick={performRequest}>Perform request</button>
        <p>Environment: {env}</p>
        <Button 
          variant="contained" 
          onClick={() => dispatch(increment())}
          >{count}</Button>

        <Button 
          variant="contained" 
          onClick={() => dispatch(success(notificationOpts))}
          >Success</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(error(notificationOpts))}
          >Error</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(warning(notificationOpts))}
          >Warning</Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(info(notificationOpts))}
          >Info</Button>
    </div>
  );
}

function performRequest() {
  axios.post(`https://multicubing-backend.herokuapp.com/api/accounts/register/`)
  .then(res => {
    const persons = res.data;
    console.log(persons);
  })
}

export default TestPage;