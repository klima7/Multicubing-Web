import { useAppSelector, useAppDispatch } from '../hooks';
import { increment } from '../actions/authActions';
import Button from '@mui/material/Button';
import logo from '../images/logo.svg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../styles/index.css'

function IndexPage() {
  const count = useAppSelector((state) => state.authReducer.value)
  const dispatch = useAppDispatch()

  return (
<Grid container spacing={2} alignItems="center">
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <img src={logo} className="App-logo" alt="logo" width='300pt' style={{animation: 'logo-animation 3s infinite'}} />
      <h1>Multicubing</h1>
    </Box>
  </Grid>
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <h2>Solve puzzles with speedcubers around the world!</h2>
      <Button 
                  variant="contained" 
                  style={{width: '100%'}} 
                  onClick={() => dispatch(increment())}
                  >{count}</Button>
    </Box>
  </Grid>
</Grid>
  );
}

export default IndexPage;
