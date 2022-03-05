import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import RoomPasswordCard from "./RoomPasswordCard";

function RoomPasswordScreen() {
  return (
    <Grid container>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <Box sx={{mt: 10}}>
          <RoomPasswordCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default RoomPasswordScreen;
