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
      <p>Rozwiązuj układanki logiczne z ludźmi z całęgo świata!</p>
    </Box>
  </Grid>
</Grid>
  );
}

export default IndexPage;
