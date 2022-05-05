import { KeyboardEvent } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { useAppThunkDispatch } from '../../../hooks';
import { sendMessage } from '../../../redux/room/room-actions';


const ChatMessagesPanel = () => {

  const dispatch = useAppThunkDispatch();
  const [message, setMessage] = useState('');

  function onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter')
      send()
  }

  function onSendClick() {
    send()
  }

  function send() {
    if(message.length === 0) return;
    dispatch(sendMessage(message));
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
        onKeyPress={onKeyPress}
      />
      <IconButton color="primary" aria-label="upload picture" component="span" onClick={onSendClick}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default ChatMessagesPanel;
