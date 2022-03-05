import { FC } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Lottie from "react-lottie";
import RoomPasswordCard from "./RoomPasswordCard";
import lockLottie from "../assets/lotties/lock.json";

interface Props {
  roomSlug: string;
}

const RoomPasswordScreen: FC<Props> = ({ roomSlug }) => {
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
          <RoomPasswordCard roomSlug={roomSlug}/>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RoomPasswordScreen;
