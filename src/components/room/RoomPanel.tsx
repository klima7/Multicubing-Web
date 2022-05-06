import { FC } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

interface Props {
  children: any;
}

const RoomPanel: FC<Props> = ({children}) => {

  const theme = useTheme() as any;

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column'}}
      style={{
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: theme.palette.text.primary,
        borderRadius: 10,
        textAlign: 'left',
        height: '100%',
      }}>
      {children}
    </Box>
  );
}

export default RoomPanel;
