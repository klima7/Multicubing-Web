import RoomPanelHeader from '../RoomPanelHeader';
import RoomPanel from '../RoomPanel';
import ChatMessagesPanel from './ChatMessagesPanel';
import SendMessagePanel from './SendMessagePanel';

const Chat = () => {

  return (
    <RoomPanel>

      <RoomPanelHeader>Chat</RoomPanelHeader>

      <ChatMessagesPanel />

      <SendMessagePanel />

    </RoomPanel>
  );
}

export default Chat;
