import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../hooks';
import { increment } from '../actions/authActions';
import Button from '@mui/material/Button';

function RequestPage() {
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

export default RequestPage;
