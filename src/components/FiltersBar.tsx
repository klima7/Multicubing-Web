import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CubeFilter from "./CubeFilter";

export default function FiltersBar() {
  return (
    <Paper 
    elevation={0} 
    style={{backgroundColor: '#1976D2', color: 'white'}}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Box sx={{my: 1}}>
          <CubeFilter value="three" />
        </Box>
        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Public only" />
        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Active only" />
      </Box>
    </Paper>
  );
}