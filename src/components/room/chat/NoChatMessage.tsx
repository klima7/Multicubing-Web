import CommentsDisabledRoundedIcon from '@mui/icons-material/CommentsDisabledRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const NoChatMessage = () => {

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{marginTop: '20px'}}
    >
      <Typography fontSize="15pt">No messages</Typography>
      <CommentsDisabledRoundedIcon style={{width: '60px', height: 'auto'}}/>
    </Stack>
  );
}

export default NoChatMessage;
