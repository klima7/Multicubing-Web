import { FC } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useAppThunkDispatch, useAppSelector } from '../../hooks';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Props {
  roomSlug: string;
}

const Chat: FC<Props> = ({roomSlug}) => {

  const dispatch = useAppThunkDispatch();
  const messages = useAppSelector(state => state.room.messages);

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
          style={{ maxHeight: '100pt' }}
        >
          <ul>
            {messages.map(message => <li>{message.sender} - {message.content}</li>)}
          </ul>
        </OverlayScrollbarsComponent>
      </div>

      <Box sx={{display: 'flex'}} style={{textAlign: 'left', borderTop: 'solid 2px black', padding: '3px 3px 3px 10px'}}>
        <TextField 
          label="Message" 
          variant="standard" 
          style={{flex: 1}}
          InputProps={{ disableUnderline: true }}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>

    </div>
  );
}

export default Chat;
