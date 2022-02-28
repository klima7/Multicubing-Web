import React, { FC } from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const CubeBackground: FC<Props> = ({children, ...rest}) => {
  return (
    <Box sx={{p: '2px'}} style={{backgroundColor: '#FFFFFF80', borderRadius: '5px'}} {...rest}>
      {children}
    </Box>
  );
};

export default CubeBackground;
