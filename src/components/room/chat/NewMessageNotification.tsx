import { FC } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NewMessageNotification: FC<Props> = (props) => {

  return (
    <Box>
      <Fab color="primary" size="small" aria-label="add" onClick={props.onClick}>
        <ArrowDownwardRoundedIcon />
      </Fab>
    </Box>
  );
}

export default NewMessageNotification;
