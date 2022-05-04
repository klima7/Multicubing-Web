import { FC } from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: any;
}

const RoomPanel: FC<Props> = ({children}) => {

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column'}}
      style={{
        border: 'solid 2px black', 
        borderRadius: 10,
        textAlign: 'left',
        height: '100%',
      }}>
      {children}
    </Box>
  );
}

export default RoomPanel;
