import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SpectatorIndicator = () => {

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{marginTop: '20px'}}
    >
      <PauseCircleIcon style={{width: '60px', height: 'auto'}}/>
      <Typography fontSize="30pt">Spectator</Typography>
    </Stack>
  );
}

export default SpectatorIndicator;
