import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Lottie from "react-lottie";
import RoomPasswordCard from "./RoomPasswordCard";
import lockLottie from "../assets/lotties/lock.json";

function RoomPasswordScreen() {
  const lottieOptions = {
    loop: false,
    animationData: lockLottie,
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <Box>
          <Box sx={{my: 3}}>
            <Lottie options={lottieOptions} width={150} />
          </Box>
          <RoomPasswordCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default RoomPasswordScreen;
