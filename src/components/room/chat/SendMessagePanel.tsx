import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { FC, useState } from 'react';
import { addMessage } from '../../../api/messages-api';


interface Props {
  roomSlug: string;
}


const ChatMessagesPanel: FC<Props> = ({ roomSlug }) => {

  const [message, setMessage] = useState('');

  function onSendClick() {
    if(message.length === 0) return;
    addMessage(roomSlug, message);
    setMessage('');
  }

  return (
    <Box 
      sx={{display: 'flex'}} 
      style={{textAlign: 'left', borderTop: 'solid 2px black', padding: '0px 3px 0px 10px', borderRadius: 10}}>
      <InputBase 
        placeholder='Message'
        style={{flex: 1}}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <IconButton color="primary" aria-label="upload picture" component="span" onClick={onSendClick}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default ChatMessagesPanel;
