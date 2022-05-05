import { FC } from 'react';
import Box from '@mui/material/Box';
import { Message } from '../../../types/types';
import Typography from '@mui/material/Typography';

interface Props {
  message: Message;
}

const ChatMessage: FC<Props> = ({message}) => {

  return (
    <Box 
      sx={{ display: 'flex', pl: 1, pr: 1.2 }}
      style={{
        borderTop: 'solid 1px gray',
        backgroundColor: 'white',
      }}
      >

      <Box sx={{ width: '10ex' }}>
        <Typography variant="body1" component="p"><b>{ message.sender }</b></Typography>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" component="p" style={{wordWrap: 'break-word', wordBreak: 'break-all'}}>{ message.content }</Typography>
      </Box>

    </Box>
  );
}

export default ChatMessage;
