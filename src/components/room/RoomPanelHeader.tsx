import { FC } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

interface Props {
  children: any;
}

const RoomPanelHeader: FC<Props> = ({children}) => {

  const theme = useTheme() as any;
  console.log(theme);

  return (
    <Box style={{
      textAlign: 'center', 
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      }}>
      <h4 style={{marginBottom: 0, marginTop: 0}}>{children}</h4>
    </Box>
  );
}

export default RoomPanelHeader;
