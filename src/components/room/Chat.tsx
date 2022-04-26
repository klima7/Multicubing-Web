import { FC, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import { addMessage } from '../../api/messages-api';

interface Props {
  roomSlug: string;
}

const Chat: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const messages = useAppSelector(state => state.room.messages);

  const [message, setMessage] = useState('');

  function onSendClick() {
    if(message.length === 0) return;
    addMessage(roomSlug, message);
    setMessage('');
  }

  return (
    <div style={{
      border: 'solid 2px black', 
      borderRadius: 10, 
      marginLeft: 10, 
      marginRight: 10, 
      textAlign: 'left',
      }}>

      <div style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h2 style={{marginBottom: 0, marginTop: 0}}>Chat</h2>
      </div>

      <div>
        <OverlayScrollbarsComponent
          style={{ height: '80pt' }}
        >
          {messages.length == 0 ? <p>No messages</p> :
          <ul>
            {Array.from(messages).reverse().map(message => <li key={message.id}>{message.sender} - {message.content}</li>)}
          </ul>
          }
        </OverlayScrollbarsComponent>
      </div>

      <Box sx={{display: 'flex'}} style={{textAlign: 'left', borderTop: 'solid 2px black', padding: '3px 3px 3px 10px'}}>
        <TextField 
          label="Message" 
          variant="standard" 
          style={{flex: 1}}
          InputProps={{ disableUnderline: true }}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={onSendClick}
        >
          Send
        </Button>
      </Box>

    </div>
  );
}

export default Chat;
