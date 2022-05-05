import { FC } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  visible: boolean;
}

const NewMessageNotification: FC<Props> = (props) => {

  return (
    <Box>
      <Zoom in={props.visible}>
        <Fab color="primary" size="small" aria-label="add" onClick={props.onClick}>
          <ArrowDownwardRoundedIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}

export default NewMessageNotification;
