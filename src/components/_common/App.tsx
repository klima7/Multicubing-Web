import { Suspense } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../../routes'
import { useWebSocket } from '../../hooks';
import '../../assets/styles/App.css'


function App() {

  useWebSocket({
    url: "/ws/account/", 
    heartbeat: true,
    onOpen: event => console.log('Open account'),
    onClose: event => console.log('Close account'),
    onReconnect: event => console.log("Reconnect account"),
  });

  return (
    <div className="App">
      <OverlayScrollbarsComponent options={{overflowBehavior: {y: 'hidden'}}}>
        <Suspense fallback="loading">
          <AppBarCustom />
          <Notifications />
          { routes }
        </Suspense>
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default App;
