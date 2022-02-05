import logo from '../images/logo.svg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function IndexPage() {
  return (
<Grid container spacing={2} alignItems="center">
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <img src={logo} className="App-logo" alt="logo" width='300pt' />
      <h1>Multicubing</h1>
    </Box>
  </Grid>
  <Grid item xs={12} md={6} style={{textAlign: "center"}}>
    <Box sx={{mt: 10}}>
      <h2>Solve puzzles with speedcubers around the world!</h2>
    </Box>
  </Grid>
</Grid>
  );
}

export default IndexPage;
