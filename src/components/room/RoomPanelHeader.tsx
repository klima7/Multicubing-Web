import { FC } from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: any;
}

const RoomPanelHeader: FC<Props> = ({children}) => {

  return (
    <Box style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
      <h4 style={{marginBottom: 0, marginTop: 0}}>{children}</h4>
    </Box>
  );
}

export default RoomPanelHeader;
