import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../routes'
import '../assets/styles/App.css'


function App() {
  const ws = new WebSocket("ws://localhost:8000/ws/rooms/?token=b35c6be01f4630d9db6e5d8694e64d7ec1e4c4e0");
  ws.addEventListener('open', event => { console.log("Open") });
  ws.addEventListener('close', event => { console.log("Close") });
  ws.onmessage = (event) => {
    console.log(`Message: ${event.data}`);
  };
  return (
    <div className="App">
      <AppBarCustom />
      <Notifications />
      { routes }
    </div>
  );
}

export default App;
