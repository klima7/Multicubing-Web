import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ChatMessage from './ChatMessage';
import NewMessageNotification from './NewMessageNotification';


const ChatMessagesPanel = () => {

  const messages = useAppSelector(state => state.room.messages);

  return (
    <Box sx={{ flex: 1 }} style={{position: 'relative'}}>
        <OverlayScrollbarsComponent
          style={{ height: '100%' }}
        >
          {messages.length === 0 ? <p>No messages</p> :
            messages.map(message => <ChatMessage key={message.id} message={message} />)
          }
        </OverlayScrollbarsComponent>

        <Box style={{position: 'absolute', right: 10, bottom: 10}}>
          <NewMessageNotification />
        </Box>
        
      </Box>
  );
}

export default ChatMessagesPanel;
