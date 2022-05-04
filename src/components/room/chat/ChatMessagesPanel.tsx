import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../hooks';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ChatMessage from './ChatMessage';
import NewMessageNotification from './NewMessageNotification';


const ChatMessagesPanel = () => {

  const messages = useAppSelector(state => state.room.messages);
  const os = useRef<OverlayScrollbarsComponent>(null);
  const [isBottom, setIsBottom] = useState(true);
  const [forcedScrolling, setForcedScrolling] = useState(false);

  useEffect(() => {
    if(isBottom) {
      scrollBottom()
    }
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
    setForcedScrolling(true)
    os.current?.osInstance()?.scroll({y: '100%'}, 500, 'linear', 
    () => setTimeout(() => setForcedScrolling(false), 100));
  }

  return (
    <Box sx={{ flex: 1 }} style={{position: 'relative'}}>
        <OverlayScrollbarsComponent
          ref={os}
          onScroll={onScroll}
          style={{ height: '100%' }}
        >
          {messages.length === 0 ? <p>No messages</p> :
            messages.map(message => <ChatMessage key={message.id} message={message} />)
          }
        </OverlayScrollbarsComponent>

        {!isBottom && !forcedScrolling &&
          <Box style={{position: 'absolute', right: 10, bottom: 10}}>
            <NewMessageNotification onClick={scrollBottomClicked} />
          </Box>
        }
        
      </Box>
  );
}

export default ChatMessagesPanel;
