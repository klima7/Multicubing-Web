import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ChatMessage from './ChatMessage';
import NoChatMessage from './NoChatMessage';
import NewMessageNotification from './NewMessageNotification';


const ChatMessagesPanel = () => {

  const messages = useAppSelector(state => state.room.messages);
  const os = useRef<OverlayScrollbarsComponent>(null);
  const [isBottom, setIsBottom] = useState(true);

  useEffect(() => {
    if(isBottom) {
      scrollBottom()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  function updateIsBottom() {
    const scroll = os.current?.osInstance()?.scroll();
    if(scroll == null) return;
    const curPos = scroll.position.y;
    const maxPos = scroll.max.y;
    const isBottomNew = maxPos - curPos < 20;
    setIsBottom(isBottomNew);
  }

  function onScroll() {
    updateIsBottom();
  }

  function scrollBottomClicked() {
    scrollBottom();
  }

  function scrollBottom() {
    os.current?.osInstance()?.scroll({y: '100%'}, 0, 'linear')
  }

  return (
    <Box sx={{ flex: 1 }} style={{position: 'relative'}}>
        <OverlayScrollbarsComponent
          ref={os}
          options={{overflowBehavior: {x: 'hidden', y: 'scroll'}}}
          onScroll={onScroll}
          style={{ height: '100%' }}
        >
          {messages.length === 0 ? <NoChatMessage /> :
            messages.map(message => <ChatMessage key={message.id} message={message} />)
          }
        </OverlayScrollbarsComponent>

        <Box style={{position: 'absolute', right: 10, bottom: 10}}>
          <NewMessageNotification 
            visible={!isBottom}
            onClick={scrollBottomClicked}
            />
        </Box>
        
      </Box>
  );
}

export default ChatMessagesPanel;
