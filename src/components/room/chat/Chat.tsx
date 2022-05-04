import Box from '@mui/material/Box';
import { FC } from 'react';
import RoomPanelHeader from '../RoomPanelHeader';
import ChatMessagesPanel from './ChatMessagesPanel';
import SendMessagePanel from './SendMessagePanel';

interface Props {
  roomSlug: string;
}

const Chat: FC<Props> = ({roomSlug}) => {

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'column'}}
      style={{
        border: 'solid 2px black', 
        borderRadius: 10,
        textAlign: 'left',
        height: '100%',
      }}>

      <RoomPanelHeader>Chat</RoomPanelHeader>

      <ChatMessagesPanel />

      <SendMessagePanel roomSlug={roomSlug} />

    </Box>
  );
}

export default Chat;
