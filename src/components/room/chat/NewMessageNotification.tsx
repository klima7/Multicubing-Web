import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';


const NewMessageNotification = () => {

  return (
    <Box>
      <Fab color="primary" size="small" aria-label="add">
        <ArrowDownwardRoundedIcon />
      </Fab>
    </Box>
  );
}

export default NewMessageNotification;
