import { FC, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import SendIcon from '@mui/icons-material/Send';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from '../../hooks';
import { addMessage } from '../../api/messages-api';
import ChatMessage from './ChatMessage';

interface Props {
  roomSlug: string;
}

const Chat: FC<Props> = ({roomSlug}) => {

  const messages = useAppSelector(state => state.room.messages);

  const [message, setMessage] = useState('');

  function onSendClick() {
    if(message.length === 0) return;
    addMessage(roomSlug, message);
    setMessage('');
  }

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column'}}
      style={{
        border: 'solid 2px black', 
        borderRadius: 10, 
        textAlign: 'left',
        height: '100%',
      }}>

      <Box style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h4 style={{marginBottom: 0, marginTop: 0}}>Chat</h4>
      </Box>

      <Box sx={{ flex: 1 }}>
        <OverlayScrollbarsComponent
          style={{ height: '100%' }}
        >
          {messages.length === 0 ? <p>No messages</p> :
            messages.map(message => <ChatMessage key={message.id} message={message} />)
          }
        </OverlayScrollbarsComponent>
      </Box>

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

    </Box>
  );
}

export default Chat;
